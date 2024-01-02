import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import BouncyCheckbox from "react-native-bouncy-checkbox";

// Form validation
import * as Yup from 'yup'
import { Formik } from 'formik';
import Search from './components/Search';
import SearchFilter from './components/SearchFilter';
// YOUTUBE:
const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be min of 4 characters')
    .max(16, 'Should be max of 16 characters')
    .required('Length is required')

})
export default function App() {
  const words = [
    {
      "menu_id": 179,
      "is_group_title": true,
      "is_tile": false,
      "action": false,
      "title": "Orders",
      "Subtitle": "",
      "Icon": "",
      "displayInLaunchPad": true,
      "transactioncode": false,
      "GroupDisplayTitle": "Orders",
      "sequence": 10,
      "prentGroup": 178
    },
    {
      "menu_id": 180,
      "is_group_title": false,
      "is_tile": true,
      "action": [
        "/web#view_type=tree&model=sale.order&menu_id=180&action=299"
      ],
      "title": "Quotations",
      "Subtitle": "Quotations",
      "Icon": "",
      "displayInLaunchPad": true,
      "transactioncode": "quo23",
      "GroupDisplayTitle": "Group Name",
      "sequence": 10,
      "prentGroup": 179
    },
    {
      "menu_id": 181,
      "is_group_title": false,
      "is_tile": true,
      "action": [
        "/web#view_type=tree&model=sale.order&menu_id=181&action=298"
      ],
      "title": "Orders",
      "Subtitle": "Orders",
      "Icon": "",
      "displayInLaunchPad": true,
      "transactioncode": false,
      "GroupDisplayTitle": "Group Name",
      "sequence": 20,
      "prentGroup": 179
    },
    {
      "menu_id": 182,
      "is_group_title": false,
      "is_tile": true,
      "action": [
        "/web#view_type=kanban&model=crm.team&menu_id=182&action=195"
      ],
      "title": "Sales Teams",
      "Subtitle": "Sales Teams",
      "Icon": "",
      "displayInLaunchPad": true,
      "transactioncode": false,
      "GroupDisplayTitle": "Group Name",
      "sequence": 30,
      "prentGroup": 179
    },
    {
      "menu_id": 183,
      "is_group_title": false,
      "is_tile": true,
      "action": [
        "/web#view_type=kanban&model=res.partner&menu_id=183&action=275"
      ],
      "title": "Customers",
      "Subtitle": "Customers",
      "Icon": false,
      "displayInLaunchPad": true,
      "transactioncode": false,
      "GroupDisplayTitle": "Group Name",
      "sequence": 40,
      "prentGroup": 179
    },
    {
      "menu_id": 184,
      "is_group_title": true,
      "is_tile": false,
      "action": false,
      "title": "To Invoice",
      "Subtitle": "",
      "Icon": "",
      "displayInLaunchPad": true,
      "transactioncode": false,
      "GroupDisplayTitle": "To Invoice",
      "sequence": 20,
      "prentGroup": 178
    },
    {
      "menu_id": 185,
      "is_group_title": false,
      "is_tile": true,
      "action": [
        "/web#view_type=tree&model=sale.order&menu_id=185&action=301"
      ],
      "title": "Orders to Invoice",
      "Subtitle": "Orders to Invoice",
      "Icon": false,
      "displayInLaunchPad": true,
      "transactioncode": false,
      "GroupDisplayTitle": "Group Name",
      "sequence": 10,
      "prentGroup": 184
    },
    {
      "menu_id": 186,
      "is_group_title": false,
      "is_tile": true,
      "action": [
        "/web#view_type=tree&model=sale.order&menu_id=186&action=302"
      ],
      "title": "Orders to Upsell",
      "Subtitle": "Orders to Upsell",
      "Icon": false,
      "displayInLaunchPad": true,
      "transactioncode": false,
      "GroupDisplayTitle": "Group Name",
      "sequence": 20,
      "prentGroup": 184
    },
    {
      "menu_id": 187,
      "is_group_title": true,
      "is_tile": false,
      "action": false,
      "title": "Products",
      "Subtitle": "",
      "Icon": "",
      "displayInLaunchPad": true,
      "transactioncode": false,
      "GroupDisplayTitle": "Products",
      "sequence": 30,
      "prentGroup": 178
    },
    {
      "menu_id": 188,
      "is_group_title": false,
      "is_tile": true,
      "action": [
        "/web#view_type=kanban&model=product.template&menu_id=188&action=311"
      ],
      "title": "Products",
      "Subtitle": "Products",
      "Icon": false,
      "displayInLaunchPad": true,
      "transactioncode": false,
      "GroupDisplayTitle": "Group Name",
      "sequence": 10,
      "prentGroup": 187
    },
    {
      "menu_id": 189,
      "is_group_title": false,
      "is_tile": true,
      "action": [
        "/web#view_type=kanban&model=product.product&menu_id=189&action=179"
      ],
      "title": "Product Variants",
      "Subtitle": "Product Variants",
      "Icon": false,
      "displayInLaunchPad": true,
      "transactioncode": false,
      "GroupDisplayTitle": "Group Name",
      "sequence": 20,
      "prentGroup": 187
    },
    {
      "menu_id": 190,
      "is_group_title": false,
      "is_tile": true,
      "action": [
        "/web#view_type=tree&model=product.pricelist&menu_id=190&action=184"
      ],
      "title": "Pricelists",
      "Subtitle": "Pricelists",
      "Icon": false,
      "displayInLaunchPad": true,
      "transactioncode": false,
      "GroupDisplayTitle": "Group Name",
      "sequence": 30,
      "prentGroup": 187
    },
    {
      "menu_id": 191,
      "is_group_title": true,
      "is_tile": false,
      "action": false,
      "title": "Reporting",
      "Subtitle": "",
      "Icon": "",
      "displayInLaunchPad": true,
      "transactioncode": false,
      "GroupDisplayTitle": "Reporting",
      "sequence": 40,
      "prentGroup": 178
    },
    {
      "menu_id": 191,
      "is_group_title": false,
      "is_tile": true,
      "action": [
        "/web#view_type=graph&model=sale.report&menu_id=191&action=290"
      ],
      "title": "Reporting",
      "Subtitle": "Reporting",
      "Icon": false,
      "displayInLaunchPad": true,
      "transactioncode": false,
      "GroupDisplayTitle": "GroupDisplayTitle",
      "sequence": 40,
      "prentGroup": 178
    },
    {
      "menu_id": 192,
      "is_group_title": true,
      "is_tile": false,
      "action": false,
      "title": "Configuration",
      "Subtitle": "",
      "Icon": "",
      "displayInLaunchPad": true,
      "transactioncode": false,
      "GroupDisplayTitle": "Configuration",
      "sequence": 50,
      "prentGroup": 178
    },
    {
      "menu_id": 193,
      "is_group_title": false,
      "is_tile": true,
      "action": [
        "/web#view_type=form&model=res.config.settings&menu_id=193&action=312"
      ],
      "title": "Settings",
      "Subtitle": "Settings",
      "Icon": false,
      "displayInLaunchPad": true,
      "transactioncode": false,
      "GroupDisplayTitle": "Group Name",
      "sequence": 10,
      "prentGroup": 192
    },
    {
      "menu_id": 194,
      "is_group_title": false,
      "is_tile": true,
      "action": [
        "/web#view_type=tree&model=crm.team&menu_id=194&action=197"
      ],
      "title": "Sales Teams",
      "Subtitle": "Sales Teams",
      "Icon": false,
      "displayInLaunchPad": true,
      "transactioncode": false,
      "GroupDisplayTitle": "Group Name",
      "sequence": 20,
      "prentGroup": 192
    },
    {
      "menu_id": 203,
      "is_group_title": false,
      "is_tile": true,
      "action": [
        "/web#view_type=tree&model=sale.order.template&menu_id=203&action=315"
      ],
      "title": "Quotation Templates",
      "Subtitle": "Quotation Templates",
      "Icon": false,
      "displayInLaunchPad": true,
      "transactioncode": false,
      "GroupDisplayTitle": "Group name",
      "sequence": 1,
      "prentGroup": 195
    },
    {
      "menu_id": 196,
      "is_group_title": false,
      "is_tile": true,
      "action": [
        "/web#view_type=tree&model=crm.tag&menu_id=196&action=194"
      ],
      "title": "Tags",
      "Subtitle": "Tags",
      "Icon": false,
      "displayInLaunchPad": true,
      "transactioncode": false,
      "GroupDisplayTitle": "Group name",
      "sequence": 10,
      "prentGroup": 195
    },
    {
      "menu_id": 198,
      "is_group_title": false,
      "is_tile": true,
      "action": [
        "/web#view_type=tree&model=product.attribute&menu_id=198&action=181"
      ],
      "title": "Attributes",
      "Subtitle": "Attributes",
      "Icon": false,
      "displayInLaunchPad": true,
      "transactioncode": false,
      "GroupDisplayTitle": "Group name",
      "sequence": 10,
      "prentGroup": 197
    },
    {
      "menu_id": 202,
      "is_group_title": false,
      "is_tile": true,
      "action": [
        "/web#view_type=tree&model=mail.activity.type&menu_id=202&action=310"
      ],
      "title": "Activity Types",
      "Subtitle": "Activity Types",
      "Icon": false,
      "displayInLaunchPad": true,
      "transactioncode": false,
      "GroupDisplayTitle": "Group Name",
      "sequence": 60,
      "prentGroup": 192
    }
  ];

  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)

  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setupperCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  const [search, setSearch] = useState("")
  const [input, setInput] = useState("")

  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if (upperCase) {
      characterList += upperCaseChars
    }
    if (lowerCase) {
      characterList += lowerCaseChars
    }
    if (numbers) {
      characterList += digitChars
    }
    if (symbols) {
      characterList += specialChars
    }

    const passwordResult = createPassword(characterList, passwordLength)

    setPassword(passwordResult)
    setIsPassGenerated(true)

  }

  const createPassword = (characters: string, passwordLength: number) => {
    let result = ''
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex)
    }
    return result
    console.log("hitesh");

  }

  const resetPasswordState = () => {
    setPassword('')
    setIsPassGenerated(false)
    setLowerCase(true)
    setupperCase(false)
    setNumbers(false)
    setSymbols(false)
  }

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>

        <SearchFilter/>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{ passwordLength: '' }}
            validationSchema={PasswordSchema}
            onSubmit={values => {
              console.log(values);
              generatePasswordString(+values.passwordLength)
              
            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
              /* and other goodies */
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    )}

                  </View>
                  <TextInput
                    style={styles.inputStyle}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    placeholder="Ex. 8"
                    keyboardType='numeric'
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include lowercase</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={lowerCase}
                    onPress={() => setLowerCase(!lowerCase)}
                    fillColor="#29AB87"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Uppercase letters</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={upperCase}
                    onPress={() => setupperCase(!upperCase)}
                    fillColor="#FED85D"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Numbers</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={numbers}
                    onPress={() => setNumbers(!numbers)}
                    fillColor="#C9A0DC"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Symbols</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={symbols}
                    onPress={() => setSymbols(!symbols)}
                    fillColor="#FC80A5"
                  />
                </View>
                <View style={styles.formActions}>
                  <TouchableOpacity
                    disabled={!isValid}
                    style={styles.primaryBtn}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.primaryBtnTxt}>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.secondaryBtn}
                    onPress={() => {
                      handleReset();
                      resetPasswordState()
                    }}
                  >
                    <Text style={styles.secondaryBtnTxt}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        {isPassGenerated ? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Result:</Text>
            <Text style={styles.description}>Long Press to copy</Text>
            <Text selectable={true} style={styles.generatedPassword}>{password}</Text>
          </View>
        ) : null}

        <TextInput />
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    color: "#000",
    fontSize: 16,
    flex: 1,
    backgroundColor: '#7CEC9F',
    borderRadius: 10,
    margin: 10
  },
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color: '#000'
  },
});