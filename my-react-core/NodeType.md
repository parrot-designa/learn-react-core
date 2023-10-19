所有DOM节点类型必须实现Node接口，Node接口在JS中被实现为Node类型，除IE，都能访问，因此所有dom节点都共享相同的属性和方法。

每个节点都有nodeType类型，表示该节点的类型。节点类型由定义在Node类型上的12个数值常量表示，比如Node.ELEMENT_NODE(1)、Node.COMMENT_NODE(8)


COMMENT_NODE节点的nodeType等于8