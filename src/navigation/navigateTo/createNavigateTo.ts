import { NavigationProp, ParamListBase } from '@react-navigation/native';

// Immensely helpful: https://stackoverflow.com/a/64528509
export type NavigateTo<ParamList extends ParamListBase> = {
  [P in keyof ParamList]: (
    // eslint-disable-next-line prettier/prettier
    ...args: ParamList[P] extends undefined
      ? [] | [params: undefined]
      : [params: ParamList[P]]
  ) => void;
};

/**
 * Creates a mapped variation of the navigation route for easier calling.
 *
 * The output list will look like this:
 * ```ts
 * {
 *   Home: (...args) => {
 *     navigation.navigate('Home', ...args);
 *   },
 *   Login: (...args) => {
 *     navigation.navigate('Login', ...args);
 *   },
 *   Register: (...args) => {
 *     navigation.navigate('Register', ...args);
 *   },
 *   ...
 * }
 * ```
 *
 * @param navigation Navigation prop or Hook.
 * @param routeNames List of routes to map to.
 * @returns A shortcut API where each `Route` is a method property containing the tail `...args` in `navigator.navigate('Route', ...args)`.
 * @example
 *
 * interface MyParamList {
 *   Home: undefined;
 *   Login: { username: string; }
 *   Register: { referrer: string; };
 * }
 *
 * type MyRoute = keyof MyParamList;
 * type MyNavigationProp = NavigationProp<MyParamList, MyRoute>;
 *
 * const routes: MyRoute[] = ['Home', 'Login', 'Register'];
 *
 * const navigation = useNavigation<MyNavigationProp>();
 * const myNavigateTo = createNavigateTo<MyNavigationProp>(navigation, routes);
 *
 * myNavigateTo.Login({ username: 'hi@email.com' });
 * // ...is identical to...
 * navigation.navigate('Login', { username: 'hi@email.com' });
 */
const createNavigateTo = <ParamList extends ParamListBase>(
  navigation: Pick<NavigationProp<ParamList>, 'navigate'>,
  routeNames: (keyof ParamList)[],
) => {
  const navigateTo = routeNames.reduce((routeNameMap, routeName) => {
    // Let's not datatype this.
    routeNameMap[routeName] = (...args: unknown[]) => {
      // @ts-ignore
      navigation.navigate(routeName, ...args);
    };

    return routeNameMap;
  }, {} as NavigateTo<ParamList>);

  return navigateTo;
};

export default createNavigateTo;
