/* tslint:disable */
/* eslint-disable */
/**
 * Firefly III API v1.5.6
 * This is the documentation of the Firefly III API. You can find accompanying documentation on the website of Firefly III itself (see below). Please report any bugs or issues. You may use the \"Authorize\" button to try the API below. This file was last generated on 2022-04-04T03:54:41+00:00 
 *
 * The version of the OpenAPI document: 1.5.6
 * Contact: james@firefly-iii.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { RuleActionUpdate } from './rule-action-update';
import { RuleTriggerType } from './rule-trigger-type';
import { RuleTriggerUpdate } from './rule-trigger-update';

/**
 * 
 * @export
 * @interface RuleUpdate
 */
export interface RuleUpdate {
    /**
     * 
     * @type {string}
     * @memberof RuleUpdate
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof RuleUpdate
     */
    description?: string;
    /**
     * ID of the rule group under which the rule must be stored. Either this field or rule_group_title is mandatory.
     * @type {string}
     * @memberof RuleUpdate
     */
    rule_group_id?: string;
    /**
     * 
     * @type {number}
     * @memberof RuleUpdate
     */
    order?: number;
    /**
     * 
     * @type {RuleTriggerType}
     * @memberof RuleUpdate
     */
    trigger?: RuleTriggerType;
    /**
     * Whether or not the rule is even active. Default is true.
     * @type {boolean}
     * @memberof RuleUpdate
     */
    active?: boolean;
    /**
     * If the rule is set to be strict, ALL triggers must hit in order for the rule to fire. Otherwise, just one is enough. Default value is true.
     * @type {boolean}
     * @memberof RuleUpdate
     */
    strict?: boolean;
    /**
     * If this value is true and the rule is triggered, other rules  after this one in the group will be skipped. Default value is false.
     * @type {boolean}
     * @memberof RuleUpdate
     */
    stop_processing?: boolean;
    /**
     * 
     * @type {Array<RuleTriggerUpdate>}
     * @memberof RuleUpdate
     */
    triggers?: Array<RuleTriggerUpdate>;
    /**
     * 
     * @type {Array<RuleActionUpdate>}
     * @memberof RuleUpdate
     */
    actions?: Array<RuleActionUpdate>;
}


