import * as gulp from 'gulp';
import {runSequence, task} from './tools/utils';

// --------------
// Clean (override).
gulp.task('clean', done => task('clean', 'all')(done));
gulp.task('clean.dev', done => task('clean', 'dev')(done));
gulp.task('clean.prod', done => task('clean', 'prod')(done));
gulp.task('check.versions', () => task('check.versions'));
gulp.task('build.docs', () => task('build.docs'));
gulp.task('serve.docs', () => task('serve.docs'));
gulp.task('serve.coverage', task('serve.coverage'));

// --------------
// Build dev.
gulp.task('build.dev', done =>
  runSequence('clean.dev',
              'tslint',
              'process.scss',
              'build.assets.dev',
              'build.js.dev',
              'build.index.dev',
              'fontawesone.font',
              'sync.build.dir',
              done));

// --------------
// Build dev watch.
gulp.task('build.dev.watch', done =>
  runSequence('build.dev',
              'watch.dev',
              done));

// --------------
// Build e2e.
gulp.task('build.e2e', done =>
  runSequence('clean.dev',
              'tslint',
              'process.scss',
              'fontawesone.font',
              'build.assets.dev',
              'build.js.e2e',
              'build.index.dev',
              done));

// --------------
// Build prod.
gulp.task('build.prod', done =>
  runSequence('clean.prod',
              'tslint',
              'process.scss',
              'build.assets.prod',
              'build.html_css.prod',
              'fontawesone.font',
              'build.js.prod',
              'build.bundles',
              'build.bundles.app',
              'build.index.prod',
              'sync.build.dir',
              done));

// --------------
// Build test.
gulp.task('build.test', done =>
  runSequence('clean.dev',
              'tslint',
              'process.scss',
              'build.assets.dev',
              'build.js.test',
              'build.index.dev',
              'fontawesone.font',
              done));

// --------------
// Build test watch.
gulp.task('build.test.watch', done =>
  runSequence('build.test',
              'watch.test',
              done));

// --------------
// Docs
// Disabled until https://github.com/sebastian-lenz/typedoc/issues/162 gets resolved
gulp.task('docs', done =>
  runSequence('build.docs',
              'serve.docs',
              done));

// --------------
// Serve dev
gulp.task('serve.dev', done =>
  runSequence('build.dev',
              'server.start',
              'watch.serve',
              done));

// --------------
// Serve e2e
gulp.task('serve.e2e', done =>
  runSequence('build.e2e',
              'server.start',
              'watch.serve',
              done));

// --------------
// Serve prod
gulp.task('serve.prod', done =>
  runSequence('build.prod',
              'server.start',
              'watch.serve',
              done));

// --------------
// Test.
gulp.task('test', done =>
  runSequence('build.test',
              'karma.start',
              done));