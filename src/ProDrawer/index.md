## ProDrawer

Demo: 

```tsx
import React from 'react';
import { ProDrawer } from 'components-document';
import { Button } from 'antd';

export default () => 
<ProDrawer 
    trigger={<Button>打开Drawer</Button>} 
>
    <div>这里是Drawer的内容</div>
</ProDrawer>
```