import { Option } from '../models/option';

export function enumToLabel(source: any, labels?: any): string {
  if (labels) {
    return labels[source];
  }
  if (source === '') {
    return '';
  }
  const list = source.split('_');
  return list.map(item => {
    const labelItem = item.toLowerCase();
    return labelItem[0].toUpperCase() + labelItem.slice(1);
  }).join(' ');
}

export function enumToOptions<T>(source: any, labels?: any): Option<T>[] {
  return Object.keys(source).map(key => {
    return { label: enumToLabel(source[key], labels), value: source[key] };
  });
}

export function randomFromEnum<T>(source: any): T {
  const keys = Object.keys(source);
  const rand = Math.floor(Math.random() * Math.floor(keys.length - 1));
  return source[keys[rand]];
}
