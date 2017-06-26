import * as gulp from 'gulp';

import Config from '../../config';

/**
 * Executes the build process, generating the manifest file using `angular2-service-worker`.
 */
export = () => {
  return require('angular2-service-worker')
    .gulpGenManifest({
      group: [{
        name: 'css',
	sources: gulp.src(`${Config.APP_CLIENT_SRC}/**/*.css`)
      }, {
        name: 'js',
	sources: gulp.src(`${Config.APP_CLIENT_DEST}/**/*.js`)
      }]
    })
    .pipe(gulp.dest(Config.APP_CLIENT_DEST));
};
