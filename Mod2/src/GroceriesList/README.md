

# Groceries

Build a grocery app that allows users to make a grocery list
## Technical Requirements

The groceries array in your state must have grocery items that look like this:
    
    state = {
      groceries: [ ]
    }
    
    {
      item: '',
      units: '',
      quantity: 0,
      isPurchased: false
    }
        
- Make an array of 3 objects using the above shape and render the item, quantity and units (12 pack, 1lb, 2 liters, etc.)
- Make inputs so that new items can be added
- Conditionally render the grocery items based on whether or not they were purchased (ok to have hard coded values for isPurchased)
- Add some style to your app
