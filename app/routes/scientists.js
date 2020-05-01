import Route from '@ember/routing/route';

export default class ScientistsRoute extends Route {
  model() {
    return [
      { name: 'Marie Curie', age: 12 },
      { name: 'Mae Jemison', age: 17 },
      { name: 'Albert Hofmann', age: 48 },
    ];
  }
}
