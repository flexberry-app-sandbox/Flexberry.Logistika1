import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-logistika-баржи-l');
  this.route('i-i-s-logistika-баржи-e',
  { path: 'i-i-s-logistika-баржи-e/:id' });
  this.route('i-i-s-logistika-баржи-e.new',
  { path: 'i-i-s-logistika-баржи-e/new' });
  this.route('i-i-s-logistika-груз-l');
  this.route('i-i-s-logistika-груз-e',
  { path: 'i-i-s-logistika-груз-e/:id' });
  this.route('i-i-s-logistika-груз-e.new',
  { path: 'i-i-s-logistika-груз-e/new' });
  this.route('i-i-s-logistika-докум-постав-l');
  this.route('i-i-s-logistika-докум-постав-e',
  { path: 'i-i-s-logistika-докум-постав-e/:id' });
  this.route('i-i-s-logistika-докум-постав-e.new',
  { path: 'i-i-s-logistika-докум-постав-e/new' });
  this.route('i-i-s-logistika-докум-результ-п-l');
  this.route('i-i-s-logistika-докум-результ-п-e',
  { path: 'i-i-s-logistika-докум-результ-п-e/:id' });
  this.route('i-i-s-logistika-докум-результ-п-e.new',
  { path: 'i-i-s-logistika-докум-результ-п-e/new' });
  this.route('i-i-s-logistika-загруз-контейн-l');
  this.route('i-i-s-logistika-загруз-контейн-e',
  { path: 'i-i-s-logistika-загруз-контейн-e/:id' });
  this.route('i-i-s-logistika-загруз-контейн-e.new',
  { path: 'i-i-s-logistika-загруз-контейн-e/new' });
  this.route('i-i-s-logistika-загрузка-баржи-l');
  this.route('i-i-s-logistika-загрузка-баржи-e',
  { path: 'i-i-s-logistika-загрузка-баржи-e/:id' });
  this.route('i-i-s-logistika-загрузка-баржи-e.new',
  { path: 'i-i-s-logistika-загрузка-баржи-e/new' });
  this.route('i-i-s-logistika-клиенты-l');
  this.route('i-i-s-logistika-клиенты-e',
  { path: 'i-i-s-logistika-клиенты-e/:id' });
  this.route('i-i-s-logistika-клиенты-e.new',
  { path: 'i-i-s-logistika-клиенты-e/new' });
  this.route('i-i-s-logistika-контейнеры-l');
  this.route('i-i-s-logistika-контейнеры-e',
  { path: 'i-i-s-logistika-контейнеры-e/:id' });
  this.route('i-i-s-logistika-контейнеры-e.new',
  { path: 'i-i-s-logistika-контейнеры-e/new' });
  this.route('i-i-s-logistika-организация-l');
  this.route('i-i-s-logistika-организация-e',
  { path: 'i-i-s-logistika-организация-e/:id' });
  this.route('i-i-s-logistika-организация-e.new',
  { path: 'i-i-s-logistika-организация-e/new' });
  this.route('i-i-s-logistika-сотрудники-l');
  this.route('i-i-s-logistika-сотрудники-e',
  { path: 'i-i-s-logistika-сотрудники-e/:id' });
  this.route('i-i-s-logistika-сотрудники-e.new',
  { path: 'i-i-s-logistika-сотрудники-e/new' });
});

export default Router;
