//测试文件
import LinkedList from '../LinkedList';
//import { isTSAnyKeyword } from '@babel/types';

describe('测试链表', () => {
    it('创建一个空链表', () => {
        const linkList = new LinkedList();
        expect(linkList.head).toBeNull();
    })
})