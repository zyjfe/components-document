## ProModal

Demo: 

```tsx
import React from 'react';
import { ProModal } from 'components-document';
import { Button } from 'antd';

export default () => 
<ProModal 
    trigger={<Button>打开Modal</Button>} 
>
    <div>这里是Modal的内容</div>
</ProModal>
```