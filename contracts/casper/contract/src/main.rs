#![no_std]
#![no_main]

extern crate alloc;

use alloc::{
    string::{String, ToString},
    vec,
};

use casper_contract::contract_api::{runtime, storage};

use casper_types::{
    contracts::{EntryPoint, NamedKeys},
    CLType,
    EntryPointAccess,
    EntryPointType,
    EntryPoints,
    Parameter,
};

#[no_mangle]
pub extern "C" fn register_user() {
    let user_id: String = runtime::get_named_arg("user_id");
    let trust_score: u64 = runtime::get_named_arg("trust_score");
    let kyc_status: bool = runtime::get_named_arg("kyc_status");
    let ai_decision: String = runtime::get_named_arg("ai_decision");

    runtime::put_key(
        "registered_user",
        storage::new_uref(user_id).into(),
    );

    runtime::put_key(
        "trust_score",
        storage::new_uref(trust_score).into(),
    );

    runtime::put_key(
        "kyc_status",
        storage::new_uref(kyc_status).into(),
    );

    runtime::put_key(
        "ai_decision",
        storage::new_uref(ai_decision).into(),
    );
}

#[no_mangle]
pub extern "C" fn call() {
    let mut entry_points = EntryPoints::new();

    entry_points.add_entry_point(
    EntryPoint::new(
        "register_user",
        vec![
            Parameter::new("user_id", CLType::String),
            Parameter::new("trust_score", CLType::U64),
            Parameter::new("kyc_status", CLType::Bool),
            Parameter::new("ai_decision", CLType::String),
        ],
        CLType::Unit,
        EntryPointAccess::Public,
        EntryPointType::Called,
    )
    .into(),
);

    let named_keys = NamedKeys::new();

    let (contract_hash, _version) = storage::new_contract(
        entry_points,
        Some(named_keys),
        Some("trust_agent_package_hash".to_string()),
        Some("trust_agent_access".to_string()),
        None,
    );

    runtime::put_key(
        "trust_agent_contract_hash",
        contract_hash.into(),
    );
}