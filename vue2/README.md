## 生命周期

### 创建

```
father beforeCreate
father created
father beforeMount
child1 beforeCreate
child1 created
child1 beforeMount
child1 mounted
father mounted
```

### 单独更新父元素数据

```
father beforeUpdate
father updated
```

### 单独更新子元素数据

```
child1 beforeUpdate
child1 updated
```

### 更新传递给子元素的数据

```
father beforeUpdate
child1 beforeUpdate
child1 updated
father updated
```

### 离开去其他页面

```
father beforeDestroy
child1 beforeDestroy
child1 destroyed
father destroyed
```
