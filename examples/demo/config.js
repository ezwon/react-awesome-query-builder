import React from 'react';
import {Widgets, Operators} from 'react-awesome-query-builder';

const {
    TextWidget,
    NumberWidget,
    SelectWidget,
    MultiSelectWidget,
    DateWidget,
    BooleanWidget,
    TimeWidget,
    DateTimeWidget,
    ValueFieldWidget
} = Widgets;
const {ProximityOperator} = Operators;
import moment from 'moment';
import en_US from 'antd/lib/locale-provider/en_US';
import ru_RU from 'antd/lib/locale-provider/ru_RU';

const staticList = {
    location: {
        continent: {
            continent1: "Continent 1",
            continent2: "Continent 2",
            continent3: "Continent 3",
        },
        country: {
            country1: "Country 1",
            country2: "Country 2",
            country3: "Country 3",
        },
        region: {
            region1: "Region 1",
            region2: "Region 2",
        },
        timezone: {
            timezone1: "Timezone 1",
            timezone2: "Timezone 2",
        },
    },
    device: {
        type: {
            value1: "Value 1",
            value2: "Value 2",
            value3: "Value 3",
        },
        brand: {
            value1: "Value 1",
            value2: "Value 2",
            value3: "Value 3",
        },
        model: {
            value1: "Value 1",
            value2: "Value 2",
            value3: "Value 3",
        },
        name: {
            value1: "Value 1",
            value2: "Value 2",
            value3: "Value 3",
        },
        manufacturer: {
            value1: "Value 1",
            value2: "Value 2",
            value3: "Value 3",
        },
        os: {
            value1: "Value 1",
            value2: "Value 2",
            value3: "Value 3",
        },
        os_version: {
            value1: "Value 1",
            value2: "Value 2",
            value3: "Value 3",
        },
        browser: {
            value1: "Value 1",
            value2: "Value 2",
            value3: "Value 3",
        },
        browser_language: {
            value1: "Value 1",
            value2: "Value 2",
            value3: "Value 3",
        },
        browser_version: {
            value1: "Value 1",
            value2: "Value 2",
            value3: "Value 3",
        },
        display_width: {
            value1: "Value 1",
            value2: "Value 2",
            value3: "Value 3",
        },
        display_height: {
            value1: "Value 1",
            value2: "Value 2",
            value3: "Value 3",
        },
    },
    connection: {
        type: {
            value1: "Value 1",
            value2: "Value 2",
            value3: "Value 3",
        }
    }
};

export default {
    conjunctions: {
        AND: {
            label: 'AND',
            formatConj: (children, conj, not, isForDisplay) => {
                return children.size > 1 ?
                    (not ? "NOT " : "") + '(' + children.join(' ' + (isForDisplay ? "AND" : "&&") + ' ') + ')'
                    : (not ? "NOT (" : "") + children.first() + (not ? ")" : "");
            },
        },
        OR: {
            label: 'OR',
            formatConj: (children, conj, not, isForDisplay) => {
                return children.size > 1 ?
                    (not ? "NOT " : "") + '(' + children.join(' ' + (isForDisplay ? "OR" : "||") + ' ') + ')'
                    : (not ? "NOT (" : "") + children.first() + (not ? ")" : "");
            },
        },
    },
    fields: {
        location: {
            label: 'Location',
            type: '!struct',
            subfields: {
                continent: {
                    label: 'Continent',
                    type: 'select',
                    listValues: staticList.location.continent,
                },
                country: {
                    label: 'Country',
                    type: 'select',
                    listValues: staticList.location.country,
                },
                city: {
                    label: 'City',
                    type: 'text',
                },
                region: {
                    label: 'Region',
                    type: 'select',
                    listValues: staticList.location.region,
                },
                timezone: {
                    label: 'Timezone',
                    type: 'select',
                    listValues: staticList.location.timezone,
                },
            }
        },
        device: {
            label: 'Device',
            type: '!struct',
            subfields: {
                type: {
                    label: 'Type',
                    type: 'select',
                    listValues: staticList.device.type,
                },
                brand: {
                    label: 'Brand',
                    type: 'select',
                    listValues: staticList.device.brand,
                },
                model: {
                    label: 'Model',
                    type: 'select',
                    listValues: staticList.device.model,
                },
                name: {
                    label: 'Name',
                    type: 'select',
                    listValues: staticList.device.name,
                },
                manufacturer: {
                    label: 'Manufacturer',
                    type: 'select',
                    listValues: staticList.device.manufacturer,
                },
                os: {
                    label: 'OS',
                    type: 'select',
                    listValues: staticList.device.os,
                },
                os_version: {
                    label: 'OS Version',
                    type: 'select',
                    listValues: staticList.device.os_version,
                },
                browser: {
                    label: 'Browser',
                    type: 'select',
                    listValues: staticList.device.browser,
                },
                browser_language: {
                    label: 'Browser Language',
                    type: 'select',
                    listValues: staticList.device.browser_language,
                },
                browser_version: {
                    label: 'Browser Version',
                    type: 'select',
                    listValues: staticList.device.browser_version,
                },
                display_width: {
                    label: 'Display Width',
                    type: 'select',
                    listValues: staticList.device.display_width,
                },
                display_height: {
                    label: 'Display Height',
                    type: 'select',
                    listValues: staticList.device.display_height,
                },
            }
        },
        connection: {
            label: 'Connection',
            type: '!struct',
            subfields: {
                type: {
                    label: 'type',
                    type: 'select',
                    listValues: staticList.connection.type,
                },
                ip: {
                    label: 'IP',
                    type: 'text',
                },
                user_agent: {
                    label: 'User Agent',
                    type: 'text',
                },
                referrer: {
                    label: 'Referrer',
                    type: 'text',
                },
                current_url: {
                    label: 'Current URL',
                    type: 'text',
                },
                isp: {
                    label: 'ISP',
                    type: 'text',
                },
                mobile_carrier: {
                    label: 'Mobile Carrier',
                    type: 'text',
                },
            }
        },
        conversion_cap: {
            label: 'Conversion Cap',
            type: '!struct',
            subfields: {
                current_visitor: {
                    label: 'Current Visitor',
                    type: 'number',
                },
                globally_on_offer: {
                    label: 'Globally on Offer',
                    type: 'number',
                },
            }
        },
        quantity: {
            label: 'Quantity',
            type: '!struct',
            subfields: {
                number_of_visitors: {
                    label: 'Number of Visitors',
                    type: 'number',
                },
                number_of_visitors_today: {
                    label: 'Number of Visitors Today',
                    type: 'number',
                },

            }
        },
        time: {
            label: 'Time',
            type: '!struct',
            subfields: {
                date: {
                    label: 'Date',
                    type: 'date',
                    operators: ['greater', 'less'],
                    defaultOperator: 'less',
                },
                time: {
                    label: 'Time',
                    type: 'time',
                    operators: ['greater_or_equal', 'less_or_equal', 'between'],
                    defaultOperator: 'between',
                    widgets: {
                        time: {
                            opProps: {
                                between: {
                                    valueLabels: [
                                        'Time from',
                                        'Time to'
                                    ],
                                },
                            },
                            widgetProps: {
                                timeFormat: 'h:mm:ss A',
                                use12Hours: true,
                            },
                        },
                    },
                },
                datetime2: {
                    label: 'Date and Time',
                    type: 'datetime',
                    valueSources: ['value']
                },

            }
        },
        tracking_fields: {
            label: 'Tracking Fields',
            type: '!struct',
            subfields: {
                custom_field_1: {
                    label: 'Custom Field 1',
                    type: 'select',
                    listValues: {
                        value1: "value1",
                        value2: "value2",
                        value3: "value3",
                    },
                },
                custom_field_2: {
                    label: 'Custom Field 2',
                    type: 'select',
                    listValues: {
                        value1: "value1",
                        value2: "value2",
                        value3: "value3",
                    },
                },
            }
        },
        others: {
            label: 'Others',
            type: '!struct',
            subfields: {
                visitor_tags: {
                    label: 'Visitors Tags',
                    type: 'select',
                    listValues: {
                        value1: "value1",
                        value2: "value2",
                        value3: "value3",
                    },
                },
                traffic_source: {
                    label: 'Traffic Source',
                    type: 'select',
                    listValues: {
                        value1: "value1",
                        value2: "value2",
                        value3: "value3",
                    },
                },
            },
        },
    },
    types: {
        text: {
            widgets: {
                text: {
                    defaultOperator: 'equal',
                    operators: [
                        'equal',
                        'not_equal',
                        "is_empty",
                        "is_not_empty",
                    ],
                    widgetProps: {
                        formatValue: (val, fieldDef, wgtDef, isForDisplay) => ("_" + JSON.stringify(val)),
                        valueLabel: "Text",
                        valuePlaceholder: "Enter text",
                    }
                },
                field: {
                    operators: [
                        'equal',
                        'not_equal',
                        'proximity'
                    ],
                }
            },
        },
        number: {
            valueSources: ['value'],
            widgets: {
                number: {
                    operators: [
                        "equal",
                        "not_equal",
                        "less",
                        "less_or_equal",
                        "greater",
                        "greater_or_equal",
                        "between",
                        "not_between",
                        "is_empty",
                        "is_not_empty",
                    ],
                    defaultOperator: 'less',
                    widgetProps: {
                        valueLabel: "Number2",
                        valuePlaceholder: "Enter number2",
                    }
                }
            },
        },
        date: {
            widgets: {
                date: {
                    operators: [
                        "equal",
                        "not_equal",
                        "less",
                        "less_or_equal",
                        "greater",
                        "greater_or_equal",
                        "between",
                        "not_between",
                        "is_empty",
                        "is_not_empty",
                    ]
                }
            },
        },
        time: {
            widgets: {
                time: {
                    operators: [
                        "equal",
                        "not_equal",
                        "less",
                        "less_or_equal",
                        "greater",
                        "greater_or_equal",
                        "between",
                        "not_between",
                        "is_empty",
                        "is_not_empty",
                    ]
                }
            },
        },
        datetime: {
            widgets: {
                datetime: {
                    operators: [
                        "equal",
                        "not_equal",
                        "less",
                        "less_or_equal",
                        "greater",
                        "greater_or_equal",
                        "between",
                        "not_between",
                        "is_empty",
                        "is_not_empty",
                    ],
                    opProps: {
                        between: {
                            valueLabels: [
                                {label: 'Date from', placeholder: 'Enrer datetime from'},
                                {label: 'Date to', placeholder: 'Enter datetime to'},
                            ],
                        },
                    },
                    widgetProps: {
                        timeFormat: 'HH:mm',
                        dateFormat: 'YYYY-MM-DD',
                        valueFormat: 'YYYY-MM-DD HH:mm',
                    }
                }
            },
        },
        select: {
            mainWidget: "select",
            widgets: {
                select: {
                    operators: [
                        'select_equals',
                        'select_not_equals'
                    ],
                    widgetProps: {
                        customProps: {
                            showSearch: true
                        }
                    },
                },
                multiselect: {
                    operators: [
                        'select_any_in',
                        'select_not_any_in'
                    ],
                    widgetProps: {},
                },
            },
        },
        multiselect: {
            widgets: {
                multiselect: {
                    operators: [
                        'equal',
                        'not_equal',
                        'select_any_in',
                        'select_not_any_in'
                    ]
                }
            },
        },
        boolean: {
            widgets: {
                boolean: {
                    operators: [
                        "equal",
                    ],
                    widgetProps: {
                        //you can enable this if you don't use fields as value sources
                        //hideOperator: true,
                        //operatorInlineLabel: "is",
                    }
                },
                field: {
                    operators: [
                        "equal",
                        "not_equal",
                    ],
                }
            },
        },
    },
    operators: {
        equal: {
            label: 'IS',
            labelForFormat: '==',
            reversedOp: 'not_equal',
        },
        not_equal: {
            label: 'IS NOT',
            labelForFormat: '!=',
            reversedOp: 'equal',
        },
        less: {
            label: '<',
            labelForFormat: '<',
            reversedOp: 'greater_or_equal',
        },
        less_or_equal: {
            label: '<=',
            labelForFormat: '<=',
            reversedOp: 'greater',
        },
        greater: {
            label: '>',
            labelForFormat: '>',
            reversedOp: 'less_or_equal',
        },
        greater_or_equal: {
            label: '>=',
            labelForFormat: '>=',
            reversedOp: 'less',
        },
        between: {
            label: 'Between',
            labelForFormat: 'BETWEEN',
            cardinality: 2,
            formatOp: (field, op, values, valueSrcs, valueTypes, opDef, operatorOptions, isForDisplay) => {
                let valFrom = values.first();
                let valTo = values.get(1);
                if (isForDisplay)
                    return `${field} >= ${valFrom} AND ${field} <= ${valTo}`;
                else
                    return `${field} >= ${valFrom} && ${field} <= ${valTo}`;
            },
            valueLabels: [
                'Value from',
                'Value to'
            ],
            textSeparators: [
                null,
                'and'
            ],
            reversedOp: 'not_between',
        },
        not_between: {
            label: 'Not between',
            labelForFormat: 'NOT BETWEEN',
            cardinality: 2,
            reversedOp: 'between',
            valueLabels: [
                'Value from',
                'Value to'
            ],
            textSeparators: [
                null,
                'and'
            ],
            reversedOp: 'between',
        },
        is_empty: {
            isUnary: true,
            label: 'Is Empty',
            labelForFormat: 'IS EMPTY',
            cardinality: 0,
            reversedOp: 'is_not_empty',
            formatOp: (field, op, value, valueSrc, valueType, opDef, operatorOptions, isForDisplay) => {
                return isForDisplay ? `${field} IS EMPTY` : `!${field}`;
            },
        },
        is_not_empty: {
            isUnary: true,
            label: 'Is not empty',
            labelForFormat: 'IS NOT EMPTY',
            cardinality: 0,
            reversedOp: 'is_empty',
            formatOp: (field, op, value, valueSrc, valueType, opDef, operatorOptions, isForDisplay) => {
                return isForDisplay ? `${field} IS NOT EMPTY` : `!!${field}`;
            },
        },
        select_equals: {
            label: 'IS',
            labelForFormat: '==',
            formatOp: (field, op, value, valueSrc, valueType, opDef, operatorOptions, isForDisplay) => {
                return `${field} == ${value}`;
            },
            reversedOp: 'select_not_equals',
        },
        select_not_equals: {
            label: 'IS NOT',
            labelForFormat: '!=',
            formatOp: (field, op, value, valueSrc, valueType, opDef, operatorOptions, isForDisplay) => {
                return `${field} != ${value}`;
            },
            reversedOp: 'select_equals',
        },
        select_any_in: {
            label: 'ANY IN',
            labelForFormat: 'IN',
            formatOp: (field, op, values, valueSrc, valueType, opDef, operatorOptions, isForDisplay) => {
                if (valueSrc == 'value')
                    return `${field} IN (${values.join(', ')})`;
                else
                    return `${field} IN (${values})`;
            },
            reversedOp: 'select_not_any_in',
        },
        select_not_any_in: {
            label: 'NOT IN',
            labelForFormat: 'NOT IN',
            formatOp: (field, op, values, valueSrc, valueType, opDef, operatorOptions, isForDisplay) => {
                if (valueSrc == 'value')
                    return `${field} NOT IN (${values.join(', ')})`;
                else
                    return `${field} NOT IN (${values})`;
            },
            reversedOp: 'select_any_in',
        },
        multiselect_equals: {
            label: 'Equals',
            labelForFormat: '==',
            formatOp: (field, op, values, valueSrc, valueType, opDef, operatorOptions, isForDisplay) => {
                if (valueSrc == 'value')
                    return `${field} == [${values.join(', ')}]`;
                else
                    return `${field} == ${values}`;
            },
            reversedOp: 'multiselect_not_equals',
        },
        multiselect_not_equals: {
            label: 'Not equals',
            labelForFormat: '!=',
            formatOp: (field, op, values, valueSrc, valueType, opDef, operatorOptions, isForDisplay) => {
                if (valueSrc == 'value')
                    return `${field} != [${values.join(', ')}]`;
                else
                    return `${field} != ${values}`;
            },
            reversedOp: 'multiselect_equals',
        },
        proximity: {
            label: 'Proximity search',
            cardinality: 2,
            valueLabels: [
                {label: 'Word 1', placeholder: 'Enter first word'},
                'Word 2'
            ],
            textSeparators: [
                //'Word 1',
                //'Word 2'
            ],
            formatOp: (field, op, values, valueSrc, valueType, opDef, operatorOptions, isForDisplay) => {
                let val1 = values.first();
                let val2 = values.get(1);
                return `${field} ${val1} NEAR/${operatorOptions.get('proximity')} ${val2}`;
            },
            options: {
                optionLabel: "Near",
                optionTextBefore: "Near",
                optionPlaceholder: "Select words between",
                factory: (props) => <ProximityOperator {...props} />,
                defaults: {
                    proximity: 2
                }
            }
        },
    },
    widgets: {
        text: {
            type: "text",
            valueSrc: 'value',
            factory: (props) => <TextWidget {...props} />,
            formatValue: (val, fieldDef, wgtDef, isForDisplay) => {
                return isForDisplay ? '"' + val + '"' : JSON.stringify(val);
            },
            validateValue: (val, fieldDef) => {
                return (val != "test");
            },
        },
        number: {
            type: "number",
            valueSrc: 'value',
            factory: (props) => <NumberWidget {...props} />,
            valueLabel: "Number",
            valuePlaceholder: "Enter number",
            formatValue: (val, fieldDef, wgtDef, isForDisplay) => {
                return isForDisplay ? val : JSON.stringify(val);
            },
        },
        select: {
            type: "select",
            valueSrc: 'value',
            factory: (props) => <SelectWidget {...props} />,
            formatValue: (val, fieldDef, wgtDef, isForDisplay) => {
                let valLabel = fieldDef.listValues[val];
                return isForDisplay ? '"' + valLabel + '"' : JSON.stringify(val);
            },
        },
        multiselect: {
            type: "multiselect",
            valueSrc: 'value',
            factory: (props) => <MultiSelectWidget {...props} />,
            formatValue: (vals, fieldDef, wgtDef, isForDisplay) => {
                let valsLabels = vals.map(v => fieldDef.listValues[v]);
                return isForDisplay ? valsLabels.map(v => '"' + v + '"') : vals.map(v => JSON.stringify(v));
            },
        },
        date: {
            type: "date",
            valueSrc: 'value',
            factory: (props) => <DateWidget {...props} />,
            dateFormat: 'DD.MM.YYYY',
            valueFormat: 'YYYY-MM-DD',
            formatValue: (val, fieldDef, wgtDef, isForDisplay) => {
                let dateVal = moment(val, wgtDef.valueFormat);
                return isForDisplay ? '"' + dateVal.format(wgtDef.dateFormat) + '"' : JSON.stringify(val);
            },
        },
        time: {
            type: "time",
            valueSrc: 'value',
            factory: (props) => <TimeWidget {...props} />,
            timeFormat: 'HH:mm',
            valueFormat: 'HH:mm:ss',
            formatValue: (val, fieldDef, wgtDef, isForDisplay) => {
                let dateVal = moment(val, wgtDef.valueFormat);
                return isForDisplay ? '"' + dateVal.format(wgtDef.timeFormat) + '"' : JSON.stringify(val);
            },
        },
        datetime: {
            type: "datetime",
            valueSrc: 'value',
            factory: (props) => <DateTimeWidget {...props} />,
            timeFormat: 'HH:mm',
            dateFormat: 'DD.MM.YYYY',
            valueFormat: 'YYYY-MM-DD HH:mm:ss',
            formatValue: (val, fieldDef, wgtDef, isForDisplay) => {
                let dateVal = moment(val, wgtDef.valueFormat);
                return isForDisplay ? '"' + dateVal.format(wgtDef.dateFormat + ' ' + wgtDef.timeFormat) + '"' : JSON.stringify(val);
            },
        },
        boolean: {
            type: "boolean",
            valueSrc: 'value',
            factory: (props) => <BooleanWidget {...props} />,
            labelYes: "Yes",
            labelNo: "No ",
            formatValue: (val, fieldDef, wgtDef, isForDisplay) => {
                return isForDisplay ? (val ? "Yes" : "No") : JSON.stringify(!!val);
            },
            defaultValue: false,
        },
        field: {
            valueSrc: 'field',
            factory: (props) => <ValueFieldWidget {...props} />,
            formatValue: (val, fieldDef, wgtDef, isForDisplay, valFieldDef) => {
                return isForDisplay ? (valFieldDef.label || val) : val;
            },
            valueLabel: "Field to compare",
            valuePlaceholder: "Select field to compare",
            customProps: {
                showSearch: true
            }
        }
    },
    settings: {
        locale: {
            short: 'en',
            full: 'en-US',
            antd: en_US,
        },
        maxLabelsLength: 50,
        hideConjForOne: true,
        renderSize: 'small',
        renderConjsAsRadios: false,
        renderFieldAndOpAsDropdown: false,
        customFieldSelectProps: {
            showSearch: true
        },
        groupActionsPosition: 'topRight', // oneOf [topLeft, topCenter, topRight, bottomLeft, bottomCenter, bottomRight]
        setOpOnChangeField: ['keep', 'default'], // 'default' (default if present), 'keep' (keep prev from last field), 'first', 'none'
        clearValueOnChangeField: false, //false - if prev & next fields have same type (widget), keep
        clearValueOnChangeOp: false,
        setDefaultFieldAndOp: false,
        maxNesting: 10,
        fieldSeparator: '.',
        fieldSeparatorDisplay: '->',
        showLabels: false,
        valueLabel: "Value",
        valuePlaceholder: "Value",
        fieldLabel: "Field",
        operatorLabel: "Operator",
        fieldPlaceholder: "Select field",
        operatorPlaceholder: "Select operator",
        deleteLabel: null,
        addGroupLabel: "Add group",
        addRuleLabel: "Add rule",
        readonlyMode: false,
        notLabel: "Not",
        showNot: true,
        delGroupLabel: null,
        canLeaveEmptyGroup: true, //after deletion
        formatReverse: (q, operator, reversedOp, operatorDefinition, revOperatorDefinition, isForDisplay) => {
            if (isForDisplay)
                return "NOT(" + q + ")";
            else
                return "!(" + q + ")";
        },
        formatField: (field, parts, label2, fieldDefinition, config, isForDisplay) => {
            if (isForDisplay)
                return label2;
            else
                return field;
        },
        valueSourcesInfo: {
            value: {
                label: "Value"
            },
            field: {
                label: "Field",
                widget: "field",
            }
        },
        valueSourcesPopupTitle: "Select value source",
        canReorder: true,
        canCompareFieldWithField: (leftField, leftFieldConfig, rightField, rightFieldConfig) => {
            //for type == 'select'/'multiselect' you can check listValues
            return true;
        },
    }
};



