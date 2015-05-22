/**
 * API Bound Models for AngularJS
 * @version v1.0.0 - 2015-05-22
 * @link https://github.com/tamaspap/angular-restmod-dotnet-style
 * @author Tamas Pap <tamas.pap@lateral-inc.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

(function(angular, undefined) {
	'use strict';

	angular.module('restmod').factory('.NETApi', ['restmod', 'inflector', function(restmod, inflector) {

		return restmod.mixin('DefaultPacker', { // include default packer extension
			$config: {
				style: '.NET',
				primaryKey: 'id',
				jsonMeta: 'meta',
				jsonLinks: 'links'
			},

			$extend: {
				// special snakecase to camelcase renaming
				Model: {
					decodeName: function(_v) { return s.decapitalize(inflector.camelize(_v)); },
					encodeName: function(_v) { return s.capitalize(inflector.camelize(_v)); },
					encodeUrlName: function(_v) { return s.capitalize(inflector.camelize(_v)); }
				}
			}
		});

	}]);})(angular);
