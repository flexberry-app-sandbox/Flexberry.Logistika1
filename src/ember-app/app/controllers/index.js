import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.logistika.caption'),
          title: i18n.t('forms.application.sitemap.logistika.title'),
          children: [{
            link: 'i-i-s-logistika-загруз-контейн-l',
            caption: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-загруз-контейн-l.caption'),
            title: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-загруз-контейн-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-logistika-докум-постав-l',
            caption: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-докум-постав-l.caption'),
            title: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-докум-постав-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-logistika-докум-результ-п-l',
            caption: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-докум-результ-п-l.caption'),
            title: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-докум-результ-п-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-logistika-организация-l',
            caption: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-организация-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-logistika-клиенты-l',
            caption: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-клиенты-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-logistika-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-сотрудники-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-logistika-баржи-l',
            caption: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-баржи-l.caption'),
            title: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-баржи-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-logistika-загрузка-баржи-l',
            caption: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-загрузка-баржи-l.caption'),
            title: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-загрузка-баржи-l.title'),
            children: null
          }, {
            link: 'i-i-s-logistika-контейнеры-l',
            caption: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-контейнеры-l.caption'),
            title: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-контейнеры-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-logistika-груз-l',
            caption: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-груз-l.caption'),
            title: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-груз-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),
})