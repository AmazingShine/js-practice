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

    it('should delete node by value from linked list', () => {
      const linkedList = new LinkedList();

      expect(linkedList.delete(5)).toBeNull();

      linkedList.append(1);
      linkedList.append(1);
      linkedList.append(2);
      linkedList.append(3);
      linkedList.append(3);
      linkedList.append(3);
      linkedList.append(4);
      linkedList.append(5);

      expect(linkedList.head.toString()).toBe('1');
      expect(linkedList.tail.toString()).toBe('5');

      const deletedNode = linkedList.delete(3);
      expect(deletedNode.value).toBe(3);
      expect(linkedList.toString()).toBe('1,1,2,4,5');

      linkedList.delete(3);
      expect(linkedList.toString()).toBe('1,1,2,4,5');

      linkedList.delete(1);
      expect(linkedList.toString()).toBe('2,4,5');

      expect(linkedList.head.toString()).toBe('2');
      expect(linkedList.tail.toString()).toBe('5');

      linkedList.delete(5);
      expect(linkedList.toString()).toBe('2,4');

      expect(linkedList.head.toString()).toBe('2');
      expect(linkedList.tail.toString()).toBe('4');

      linkedList.delete(4);
      expect(linkedList.toString()).toBe('2');

      expect(linkedList.head.toString()).toBe('2');
      expect(linkedList.tail.toString()).toBe('2');

      linkedList.delete(2);
      expect(linkedList.toString()).toBe('');
    });

    it('should find node by callback', () => {
      const linkedList = new LinkedList();

      linkedList
        .append({ value: 1, key: 'test1' })
        .append({ value: 2, key: 'test2' })
        .append({ value: 3, key: 'test3' });

      const node = linkedList.find({ callback: value => value.key === 'test2' });

      expect(node).toBeDefined();
      expect(node.value.value).toBe(2);
      expect(node.value.key).toBe('test2');
      expect(linkedList.find({ callback: value => value.key === 'test5' })).toBeNull();
    });
})