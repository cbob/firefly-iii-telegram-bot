/* tslint:disable */
/* eslint-disable */
/**
 * Firefly III API v1.5.4
 * This is the documentation of the Firefly III API. You can find accompanying documentation on the website of Firefly III itself (see below). Please report any bugs or issues. You may use the \"Authorize\" button to try the API below. This file was last generated on 2021-09-25T14:21:28+00:00 
 *
 * The version of the OpenAPI document: 1.5.4
 * Contact: james@firefly-iii.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { BudgetSpent } from './budget-spent';

/**
 * 
 * @export
 * @interface Budget
 */
export interface Budget {
    /**
     * 
     * @type {string}
     * @memberof Budget
     */
    created_at?: string;
    /**
     * 
     * @type {string}
     * @memberof Budget
     */
    updated_at?: string;
    /**
     * 
     * @type {string}
     * @memberof Budget
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof Budget
     */
    active?: boolean;
    /**
     * 
     * @type {number}
     * @memberof Budget
     */
    order?: number;
    /**
     * The type of auto-budget that Firefly III must create.
     * @type {string}
     * @memberof Budget
     */
    auto_budget_type?: BudgetAutoBudgetTypeEnum;
    /**
     * Use either currency_id or currency_code. Defaults to the user\'s default currency.
     * @type {string}
     * @memberof Budget
     */
    auto_budget_currency_id?: string | null;
    /**
     * Use either currency_id or currency_code. Defaults to the user\'s default currency.
     * @type {string}
     * @memberof Budget
     */
    auto_budget_currency_code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Budget
     */
    auto_budget_amount?: string | null;
    /**
     * Period for the auto budget
     * @type {string}
     * @memberof Budget
     */
    auto_budget_period?: BudgetAutoBudgetPeriodEnum;
    /**
     * Information on how much was spent in this budget. Is only filled in when the start and end date are submitted.
     * @type {Array<BudgetSpent>}
     * @memberof Budget
     */
    spent?: Array<BudgetSpent>;
}

/**
    * @export
    * @enum {string}
    */
export enum BudgetAutoBudgetTypeEnum {
    Reset = 'reset',
    Rollover = 'rollover',
    None = 'none',
    Null = 'null'
}
/**
    * @export
    * @enum {string}
    */
export enum BudgetAutoBudgetPeriodEnum {
    Daily = 'daily',
    Weekly = 'weekly',
    Monthly = 'monthly',
    Quarterly = 'quarterly',
    HalfYear = 'half_year',
    Yearly = 'yearly',
    Null = 'null'
}


