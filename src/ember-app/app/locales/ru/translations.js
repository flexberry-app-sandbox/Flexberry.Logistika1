import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISLogistikaБаржиLForm from './forms/i-i-s-logistika-баржи-l';
import IISLogistikaГрузLForm from './forms/i-i-s-logistika-груз-l';
import IISLogistikaДокумПоставLForm from './forms/i-i-s-logistika-докум-постав-l';
import IISLogistikaДокумРезультПLForm from './forms/i-i-s-logistika-докум-результ-п-l';
import IISLogistikaЗагрузКонтейнLForm from './forms/i-i-s-logistika-загруз-контейн-l';
import IISLogistikaЗагрузкаБаржиLForm from './forms/i-i-s-logistika-загрузка-баржи-l';
import IISLogistikaКлиентыLForm from './forms/i-i-s-logistika-клиенты-l';
import IISLogistikaКонтейнерыLForm from './forms/i-i-s-logistika-контейнеры-l';
import IISLogistikaОрганизацияLForm from './forms/i-i-s-logistika-организация-l';
import IISLogistikaСотрудникиLForm from './forms/i-i-s-logistika-сотрудники-l';
import IISLogistikaБаржиEForm from './forms/i-i-s-logistika-баржи-e';
import IISLogistikaГрузEForm from './forms/i-i-s-logistika-груз-e';
import IISLogistikaДокумПоставEForm from './forms/i-i-s-logistika-докум-постав-e';
import IISLogistikaДокумРезультПEForm from './forms/i-i-s-logistika-докум-результ-п-e';
import IISLogistikaЗагрузКонтейнEForm from './forms/i-i-s-logistika-загруз-контейн-e';
import IISLogistikaЗагрузкаБаржиEForm from './forms/i-i-s-logistika-загрузка-баржи-e';
import IISLogistikaКлиентыEForm from './forms/i-i-s-logistika-клиенты-e';
import IISLogistikaКонтейнерыEForm from './forms/i-i-s-logistika-контейнеры-e';
import IISLogistikaОрганизацияEForm from './forms/i-i-s-logistika-организация-e';
import IISLogistikaСотрудникиEForm from './forms/i-i-s-logistika-сотрудники-e';
import IISLogistikaБаржиModel from './models/i-i-s-logistika-баржи';
import IISLogistikaГрузModel from './models/i-i-s-logistika-груз';
import IISLogistikaДокумПоставModel from './models/i-i-s-logistika-докум-постав';
import IISLogistikaДокумРезультПModel from './models/i-i-s-logistika-докум-результ-п';
import IISLogistikaЗагрузКонтейнModel from './models/i-i-s-logistika-загруз-контейн';
import IISLogistikaЗагрузкаБаржиModel from './models/i-i-s-logistika-загрузка-баржи';
import IISLogistikaКлиентыModel from './models/i-i-s-logistika-клиенты';
import IISLogistikaКонтейнерыModel from './models/i-i-s-logistika-контейнеры';
import IISLogistikaОрганизацияModel from './models/i-i-s-logistika-организация';
import IISLogistikaСотрудникиModel from './models/i-i-s-logistika-сотрудники';
import IISLogistikaТЧДостКонModel from './models/i-i-s-logistika-т-ч-дост-кон';
import IISLogistikaТЧИнфОГрузеModel from './models/i-i-s-logistika-т-ч-инф-о-грузе';
import IISLogistikaТЧИнфОЗакModel from './models/i-i-s-logistika-т-ч-инф-о-зак';
import IISLogistikaТЧИнфОКонтModel from './models/i-i-s-logistika-т-ч-инф-о-конт';
import IISLogistikaТЧРасписаниеModel from './models/i-i-s-logistika-т-ч-расписание';
import IISLogistikaТЧСвобМестModel from './models/i-i-s-logistika-т-ч-своб-мест';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-logistika-баржи': IISLogistikaБаржиModel,
    'i-i-s-logistika-груз': IISLogistikaГрузModel,
    'i-i-s-logistika-докум-постав': IISLogistikaДокумПоставModel,
    'i-i-s-logistika-докум-результ-п': IISLogistikaДокумРезультПModel,
    'i-i-s-logistika-загруз-контейн': IISLogistikaЗагрузКонтейнModel,
    'i-i-s-logistika-загрузка-баржи': IISLogistikaЗагрузкаБаржиModel,
    'i-i-s-logistika-клиенты': IISLogistikaКлиентыModel,
    'i-i-s-logistika-контейнеры': IISLogistikaКонтейнерыModel,
    'i-i-s-logistika-организация': IISLogistikaОрганизацияModel,
    'i-i-s-logistika-сотрудники': IISLogistikaСотрудникиModel,
    'i-i-s-logistika-т-ч-дост-кон': IISLogistikaТЧДостКонModel,
    'i-i-s-logistika-т-ч-инф-о-грузе': IISLogistikaТЧИнфОГрузеModel,
    'i-i-s-logistika-т-ч-инф-о-зак': IISLogistikaТЧИнфОЗакModel,
    'i-i-s-logistika-т-ч-инф-о-конт': IISLogistikaТЧИнфОКонтModel,
    'i-i-s-logistika-т-ч-расписание': IISLogistikaТЧРасписаниеModel,
    'i-i-s-logistika-т-ч-своб-мест': IISLogistikaТЧСвобМестModel
  },

  'application-name': 'Логистика',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Логистика',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Логистика',
          title: 'Логистика'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        документация: {
          caption: 'Документация',
          title: 'Документация',
          'i-i-s-logistika-докум-постав-l': {
            caption: 'Документ поставки',
            title: 'Документ поставки'
          },
          'i-i-s-logistika-загруз-контейн-l': {
            caption: 'Загрузка контейнеров',
            title: 'Загрузка контейнеров'
          },
          'i-i-s-logistika-загрузка-баржи-l': {
            caption: 'Загрузка баржи',
            title: 'Загрузка баржи'
          },
          'i-i-s-logistika-докум-результ-п-l': {
            caption: 'Документ результатов поставки',
            title: 'Документ результатов поставки'
          }
        },
        'данные-об-организации-и-компонентах-организации': {
          caption: 'Данные об организации и компонентах организации',
          title: 'Данные об организации и компонентах организации',
          'i-i-s-logistika-организация-l': {
            caption: 'Организация',
            title: 'Организация'
          },
          'i-i-s-logistika-сотрудники-l': {
            caption: 'Сотрудники',
            title: 'Сотрудники'
          },
          'i-i-s-logistika-баржи-l': {
            caption: 'Баржи',
            title: 'Баржи'
          },
          'i-i-s-logistika-контейнеры-l': {
            caption: 'Контейнеры',
            title: 'Контейнеры'
          },
          'i-i-s-logistika-клиенты-l': {
            caption: 'Клиенты',
            title: 'Клиенты'
          }
        },
        номенклатура: {
          caption: 'Номенклатура',
          title: 'Номенклатура',
          'i-i-s-logistika-груз-l': {
            caption: 'Груз',
            title: 'Груз'
          }
        },
        logistika: {
          caption: 'Logistika',
          title: 'Logistika',
          'i-i-s-logistika-загруз-контейн-l': {
            caption: 'Загруз контейн',
            title: ''
          },
          'i-i-s-logistika-докум-постав-l': {
            caption: 'Докум постав',
            title: ''
          },
          'i-i-s-logistika-докум-результ-п-l': {
            caption: 'Докум результ П',
            title: ''
          },
          'i-i-s-logistika-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-logistika-клиенты-l': {
            caption: 'Клиенты',
            title: ''
          },
          'i-i-s-logistika-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-logistika-баржи-l': {
            caption: 'Баржи',
            title: ''
          },
          'i-i-s-logistika-загрузка-баржи-l': {
            caption: 'Загрузка баржи',
            title: ''
          },
          'i-i-s-logistika-контейнеры-l': {
            caption: 'Контейнеры',
            title: ''
          },
          'i-i-s-logistika-груз-l': {
            caption: 'Груз',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-logistika-баржи-l': IISLogistikaБаржиLForm,
    'i-i-s-logistika-груз-l': IISLogistikaГрузLForm,
    'i-i-s-logistika-докум-постав-l': IISLogistikaДокумПоставLForm,
    'i-i-s-logistika-докум-результ-п-l': IISLogistikaДокумРезультПLForm,
    'i-i-s-logistika-загруз-контейн-l': IISLogistikaЗагрузКонтейнLForm,
    'i-i-s-logistika-загрузка-баржи-l': IISLogistikaЗагрузкаБаржиLForm,
    'i-i-s-logistika-клиенты-l': IISLogistikaКлиентыLForm,
    'i-i-s-logistika-контейнеры-l': IISLogistikaКонтейнерыLForm,
    'i-i-s-logistika-организация-l': IISLogistikaОрганизацияLForm,
    'i-i-s-logistika-сотрудники-l': IISLogistikaСотрудникиLForm,
    'i-i-s-logistika-баржи-e': IISLogistikaБаржиEForm,
    'i-i-s-logistika-груз-e': IISLogistikaГрузEForm,
    'i-i-s-logistika-докум-постав-e': IISLogistikaДокумПоставEForm,
    'i-i-s-logistika-докум-результ-п-e': IISLogistikaДокумРезультПEForm,
    'i-i-s-logistika-загруз-контейн-e': IISLogistikaЗагрузКонтейнEForm,
    'i-i-s-logistika-загрузка-баржи-e': IISLogistikaЗагрузкаБаржиEForm,
    'i-i-s-logistika-клиенты-e': IISLogistikaКлиентыEForm,
    'i-i-s-logistika-контейнеры-e': IISLogistikaКонтейнерыEForm,
    'i-i-s-logistika-организация-e': IISLogistikaОрганизацияEForm,
    'i-i-s-logistika-сотрудники-e': IISLogistikaСотрудникиEForm
  },

});

export default translations;
