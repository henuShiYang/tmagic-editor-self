import { defineAsyncComponent, watchEffect, ref, reactive } from 'vue';
import PubSub from 'pubsub-js';
import { nanoid } from 'nanoid';

interface dropParams {
  dropDomId: string;
  e: DragEvent;
}
//当前已经选择的组件
const componentList = reactive<any[]>([]);

const handleAddComponent = async (params: dropParams) => {
  const { e, dropDomId } = params;

  //拖拽获取拖拽之后的位置
  const clientX = e.clientX;
  const clientY = e.clientY;
  const dropContainerDom = document.getElementById(dropDomId);
  //当前拖拽组件的类型

  const { top, left } = dropContainerDom?.getBoundingClientRect() || {
    top: 0,
    left: 0,
  };

  const domTop = clientY - top;
  const domLeft = clientX - left;

  const defaultValue = await import('remote-v2/buttonConfig');

  const component = defineAsyncComponent(() => import('remote-v2/button'));
  const value = ref(component.value);
  const stop = watchEffect(() => {
    //加载成功了
    if (value) {
      const componentId = nanoid(10);
      componentList.push({
        component,
        componentId,
        defaultValue: defaultValue.default,
        style: {
          position: 'absolute',
          left: `${domLeft}px`,
          top: `${domTop}px`,
        },
      });
      //触发重新选择组件的操作
      PubSub.publish('selectComponent', { componentId });
    }
  });
  stop();
  return null;
};

//处理添加组件

export { handleAddComponent, componentList };
