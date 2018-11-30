import LinkedList from '../LinkedList'

describe(" ==== ", () => {
    test(" base ", () => {
        let list = new LinkedList();
        list.append(3)
        list.append(5)
        list.append(6)
        list.prepend(8)
        console.log(list.toString())
        
    })
})