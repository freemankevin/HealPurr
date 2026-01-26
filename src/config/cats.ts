export interface Cat {
  id: string;
  name: string;
  svg: string;
  color: string;
}

export const cats: Cat[] = [
  { id: 'tortoiseshell', name: '米儿', svg: '/cats/Tortoiseshell.svg', color: 'hover:bg-orange-900' },
  { id: 'cow', name: '样儿', svg: '/cats/Cow.svg', color: 'hover:bg-gray-700' },
  { id: 'tabby', name: '九儿', svg: '/cats/Tabby.svg', color: 'hover:bg-slate-700' },
];

// 获取猫咪 ID 列表，用于 content schema
export const catIds = cats.map(cat => cat.id) as [string, ...string[]];

// 根据 ID 获取猫咪信息
export const getCatById = (id: string): Cat | undefined => {
  return cats.find(cat => cat.id === id);
};

// 根据 ID 获取猫咪 svg 路径
export const getCatSvg = (id: string): string => {
  return getCatById(id)?.svg || '/cats/daimao.svg';
};

// 根据 ID 获取猫咪名称
export const getCatName = (id: string): string => {
  return getCatById(id)?.name || '未知猫咪';
};
