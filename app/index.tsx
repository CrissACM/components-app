import {
  animationMenuRoutes,
  menuRoutes,
  uiMenuRoutes,
} from '@/constants/Routes';
import { MenuItem } from '@/presentation/menu/MenuItem';
import { ThemedView } from '@/presentation/shared/ThemedView';
import { View } from 'react-native';

export default function ComponentsApp() {
  return (
    <ThemedView margin>
      {animationMenuRoutes.map((route, index) => (
        <MenuItem
          key={route.name}
          name={route.name}
          title={route.title}
          icon={route.icon}
          isFirst={index === 0}
          isLast={index === animationMenuRoutes.length - 1}
        />
      ))}

      <View className='my-3' />

      {uiMenuRoutes.map((route, index) => (
        <MenuItem
          key={route.name}
          name={route.name}
          title={route.title}
          icon={route.icon}
          isFirst={index === 0}
          isLast={index === uiMenuRoutes.length - 1}
        />
      ))}

      <View className='my-3' />

      {menuRoutes.map((route, index) => (
        <MenuItem
          key={route.name}
          name={route.name}
          title={route.title}
          icon={route.icon}
          isFirst={index === 0}
          isLast={index === menuRoutes.length - 1}
        />
      ))}
    </ThemedView>
  );
}
