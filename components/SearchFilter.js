import { StyleSheet, ScrollView, TextInput, FlatList, Text, View } from 'react-native'
import React, { useState } from 'react'

const SearchFilter = (data, input, setInput) => {
    const [h, setH] = useState([
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
      ])
      const filterList = (text) => {
        console.log("HITEN", text)
        if (text != "") {
          let newlist = h.filter(item => item.title.toLowerCase().includes(text.toLowerCase()) || item.Subtitle.toLowerCase().includes(text.toLowerCase()) || JSON.stringify(item.transactioncode).toLowerCase().includes(text.toLowerCase()));
          setH(newlist)
        }
      }
    return (
        <ScrollView>
          <View style={styles.container}>
          <TextInput
            onChangeText={(search) => filterList(search)}
            style={styles.searchBar}
          />
          {h.map((item, index) => {
            return (
              <>
                <Text key={index} style={styles.itemText}>{item.title} {item.Subtitle} {JSON.stringify(item.transactioncode)}</Text>
              </>
            )
          })}
        </View>
        </ScrollView>
    )
}

export default SearchFilter

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        alignItems: 'center',
        height: '100%',
      },
      searchBar: {
        fontSize: 24,
        margin: 10,
        width: '90%',
        height: 50,
        backgroundColor: 'white',
      },
      itemText: {
        margin: 10,
        color: 'white',
        fontSize: 14,
        backgroundColor: 'blue',
        width: '100%',
        height: 20
      }
})