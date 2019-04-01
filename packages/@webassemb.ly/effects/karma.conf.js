module.exports = function(config) {
  config.set({
    autoWatch: false,
    
    frameworks: ['jasmine', 'karma-typescript'],

    files: [
      { pattern: 'src/**/*.ts' },
      { pattern: 'test/**/*.ts' }
    ],

    preprocessors: {
      'src/**/*.ts': ['karma-typescript', 'coverage'],
      'test/**/*.ts': ['karma-typescript']
    },

    reporters: ['progress', 'karma-typescript'],

    browsers: ['PhantomJS'],

    karmaTypescriptConfig: {
      files: [
        '*.ts'
      ],
      compilerOptions: {
        module: 'commonjs',
        declaration: true,
        noImplicitAny: false,
        removeComments: true,
        noLib: false,
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        target: 'es5',
        inlineSourceMap: false,
        sourceMap: false,
        lib: [
          'es6',
          'dom',
        ],
        noEmitHelpers: false,
      }
    }
  });
};