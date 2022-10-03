import React, { useCallback, useReducer, useState } from 'react';
import { Button, Modal, Icon, TextContainer } from '@shopify/polaris';
import { ArrowLeftMinor } from '@shopify/polaris-icons';
import { TextField } from '@shopify/polaris';
import { Checkbox } from '@shopify/polaris';
import { Stack, RadioButton } from '@shopify/polaris';
import reducer from './reducer';
import { SET_CATEGORY, SET_CHECK, SET_DESC, SET_NAME, SET_RADIO, SET_SKU, SET_TIME } from './types';


export var initialState = {
    title: '',
    description: '',
    time: '',
    sku: '',
    barcodeCheck: false,
    category: '',
    imageRadio: 'shopify',
}





export default function Form() {

    const [active, setActive] = useState(false);

    const [state, dispatch] = useReducer(reducer, initialState);
    const labels = ["Title", "Description", "Handling Time", "Amazon Parent SKU", "Barcode/GTIN Exemption", "Add Amazon Category", "Image Selection"];

    var handleChange = (value, field) => {

        if (field === "title") {
            dispatch({
                type: SET_NAME,
                payload: {
                    field: field,
                    value: value
                }
            })
        }
        else
            if (field === "description") {
                dispatch({
                    type: SET_DESC,
                    payload: {
                        field: field,
                        value: value
                    }
                })
            }
            else
                if (field === "time") {
                    dispatch({
                        type: SET_TIME,
                        payload: {
                            field: field,
                            value: value
                        }
                    })
                }
                else
                    if (field === "sku") {
                        dispatch({
                            type: SET_SKU,
                            payload: {
                                field: field,
                                value: value
                            }
                        })
                    }
                    else
                        if (field === "barcodeCheck") {
                            dispatch({
                                type: SET_CHECK,
                                payload: {
                                    field: field,
                                    value: value
                                }
                            })
                        }
                        else
                            if (field === "category") {
                                dispatch({
                                    type: SET_CATEGORY,
                                    payload: {
                                        field: field,
                                        value: value
                                    }
                                })
                            }
                            else
                                if (field === "imageRadio") {

                                    dispatch({
                                        type: SET_RADIO,
                                        payload: {
                                            field: field,
                                            value: value
                                        }
                                    })
                                }

    }

    var openModal = useCallback(() => setActive(!active), [active]);

    const activator = <Button className='submitButton' primary onClick={(event) => openModal(event)}>Submit</Button>;

    return (
        <div className='homeContainer'>

            <div className='formContainer'>

                <div className='formHeader'>
                    <div className='backBtnDiv'>
                        <Button>
                            <Icon
                                source={ArrowLeftMinor}
                                color="base"
                            />
                        </Button>
                    </div>
                </div>

                <div className='mainFormDiv'>

                    <div className='entryContainer'>

                        <div className='firstEntryDiv'>
                            <p className='entryHeading'>Title</p>
                            <p className='entrySubheading'>Mention the title of the product that you want to display to the customers on the Amazon marketplace.</p>
                        </div>

                        <div className='secondEntryDiv'>

                            <div className='inputContainer'>

                                <TextField
                                    placeholder='Title'
                                    onChange={(value) => handleChange(value, "title")}
                                    value={state.title}
                                />

                            </div>

                        </div>

                    </div>

                    <hr />

                    <div className='entryContainer'>

                        <div className='firstEntryDiv'>
                            <p className='entryHeading'>Description</p>
                            <p className='entrySubheading'>Mention a detailed yet precise product description embedded with 'Keywords' that define the product appropriately here. To know more about Amazon's product description policy. Click on the link HERE!</p>
                        </div>

                        <div className='secondEntryDiv'>

                            <div className='inputContainer'>

                                <TextField
                                    placeholder='Description'
                                    onChange={(value) => handleChange(value, "description")}
                                    value={state.description}
                                />

                            </div>

                        </div>

                    </div>

                    <hr />

                    <div className='entryContainer'>

                        <div className='firstEntryDiv'>
                            <p className='entryHeading'>Handling Time</p>
                            <p className='entrySubheading'>Mention the title of the product that you want to display to the customers on the Amazon marketplace.</p>
                        </div>

                        <div className='secondEntryDiv'>

                            <div className='inputContainer'>

                                <TextField
                                    placeholder='Handling Time'
                                    onChange={(value) => handleChange(value, "time")}
                                    value={state.time}
                                />

                            </div>

                        </div>

                    </div>

                    <hr />

                    <div className='entryContainer'>

                        <div className='firstEntryDiv'>
                            <p className='entryHeading'>Amazon Parent Sku</p>
                            <p className='entrySubheading'>Set the unique SKU that defines the shopify products against Amazon listings.</p>
                        </div>

                        <div className='secondEntryDiv'>

                            <div className='inputContainer'>

                                <TextField
                                    placeholder='Amazon Parent SKU'
                                    onChange={(value) => handleChange(value, "sku")}
                                    value={state.sku}
                                />

                            </div>

                        </div>

                    </div>

                    <hr />

                    <div className='entryContainer'>

                        <div className='firstEntryDiv'>
                            <p className='entryHeading'>Barcode/GTIN Exemption</p>
                            <p className='entrySubheading'>Enable the checkbox to upload products with Barcode exemption of Amazon.</p>
                        </div>

                        <div className='secondEntryDiv'>

                            <div className='checkboxContainer'>

                                {(state.barcodeCheck === true) ? <Checkbox
                                    label="Barcode/GTIN Exemption"
                                    onChange={(value) => handleChange(value, "barcodeCheck")}
                                    value={state.barcodeCheck}
                                    checked
                                /> : <Checkbox
                                    label="Barcode/GTIN Exemption"
                                    onChange={(value) => handleChange(value, "barcodeCheck")}
                                    value={state.barcodeCheck}
                                />}

                            </div>

                        </div>

                    </div>

                    <hr />

                    <div className='entryContainer'>

                        <div className='firstEntryDiv'>
                            <p className='entryHeading'>Add Amazon Category</p>
                            <p className='entrySubheading'>Set Amazon Category / Browse Node for a product, to set the Searchability and browsing hierarchy on Amazon Marketplace.</p>
                        </div>

                        <div className='secondEntryDiv'>

                            <div className='inputContainer'>

                                <TextField
                                    placeholder='Add Amazon category'
                                    onChange={(value) => handleChange(value, "category")}
                                    value={state.category}
                                />

                            </div>

                        </div>

                    </div>

                    <hr />

                    <div className='entryContainer'>

                        <div className='firstEntryDiv'>
                            <p className='entryHeading'>Image Selection</p>
                            <p className='entrySubheading'>Select the best image combinations or add new images (a maximum of 9) for your product displayed as part of the product images when it gets uploaded on Amazon.</p>
                        </div>

                        <div className='secondEntryDiv'>

                            <div className='radioContainer'>

                                <Stack vertical>
                                    <RadioButton
                                        label="Set product images as shown on shopify"
                                        checked={state.imageRadio === 'shopify'}
                                        onChange={(value) => handleChange('shopify', "imageRadio")}
                                        name="radioButtons"
                                        id="shopify"
                                    />
                                    <RadioButton
                                        label="Set custom Amazon images"
                                        checked={state.imageRadio === 'amazon'}
                                        onChange={(value) => handleChange('amazon', "imageRadio")}
                                        name="radioButtons"
                                        id="amazon"

                                    />
                                </Stack>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            {console.log(state)}

            <div style={{ height: '500px' }}>
                <Modal
                    activator={activator}
                    open={active}
                    onClose={openModal}
                    title="Your Details"
                >
                    <Modal.Section>
                        <TextContainer>
                            <div className='modalContainer'>

                                {Object.keys(state).map((key, index) => {
                                    return (
                                        <div className='modalRowDiv'>
                                            <p className='modalLabel'>{labels[index]} : </p>
                                            <p className='modalEntry'>{((state[key] === true) || (state[key] === false))?((state[key] === true)?"Checked":"Unchecked"):state[key]}</p>
                                        </div>
                                    )
                                })}

                            </div>
                        </TextContainer>
                    </Modal.Section>
                </Modal>
            </div>


        </div>

    )
}
