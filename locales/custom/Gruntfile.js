module.exports = function(grunt) {
     'use strict';

	 grunt.loadNpmTasks('grunt-contrib-sass');
	 grunt.loadNpmTasks('grunt-contrib-watch');
	 grunt.loadNpmTasks('grunt-contrib-copy');
	 grunt.loadNpmTasks('grunt-notify');

	 grunt.initConfig({ 
	 	projectFolder: 'belezaqui',

	 	paths: {
         custom: 'R:/IKCLoja/Genesis/Repository/<%= projectFolder %>/locales/custom/',
         global: 'R:/IKCLoja/Genesis/Repository/<%= projectFolder %>/locales/global/'
        },
		// Sass: compiles SCSS files
		sass : {
		  dist : {
			options : { style : 'compressed', sourcemap: 'auto' },
			files : {
				'<%= paths.custom %>/css/rk-desktop-main.css' : 'sass/rk-desktop-main.scss',
				'<%= paths.custom %>/css/rk-desktop-checkout.css' : 'sass/rk-desktop-checkout.scss',

				'<%= paths.custom %>/css/rk-mobile-main.css' : 'sass/rk-mobile-main.scss',
				'<%= paths.custom %>/css/rk-mobile-checkout.css' : 'sass/rk-mobile-checkout.scss',
			}
		  }
		}, // sass

		copy: {
		  js: {
		    expand: true,
		    src: 'js/*',
		    dest: '<%= paths.custom %>',
		  },
		  img: {
		    expand: true,
		    src: 'img/*',
		    src: ['img/*',  '!**/*.db'],
		    dest: '<%= paths.custom %>',
		  },
		  global: {
		    expand: true,
		    src: '../global/img/*',
		    src: ['img/*',  '!**/*.db'],
		    dest: '<%= paths.global %>',
		  },
		  fonts: {
		    expand: true,
		    src: 'fonts/**/*',
		    dest: '<%= paths.custom %>',
		  },
		  html: {
		    expand: true,
		    src: 'html/*',
		    dest: '<%= paths.custom %>',
		  },
		},//copy

		notify: {
		    sass:{
		        options:{
		            title: "CSS Files built",
		            message: "Sass task complete"
		        }
		    }
		}, // Notify

		watch : {
	      	css: {
                files: 'sass/**/*.scss',
                tasks : ['sass']
        	},
        	js: {
        		files: 'js/*.js',
        		tasks : ['copy:js']
        	},
        	img: {
        		files: 'img/**/*',
        		tasks : ['copy:img']
        	},
        	fonts: {
        		files: 'fonts/**/*',
        		tasks : ['copy:fonts']
        	},
        	html: {
        		files: 'html/*',
        		tasks : ['copy:html']
        	}
	    } // watch
		
	 });
	 
	 // Tarefas que serão executadas
	 grunt.registerTask( 'default', ['sass'] );

	 // Tarefa para Watch
  	 grunt.registerTask('w', ['watch'] );
  	 grunt.registerTask('copyjs', ['copy:js'] );
  	 grunt.registerTask('copyimg', ['copy:img'] );
  	 grunt.registerTask('copyfonts', ['copy:fonts'] );
  	 grunt.registerTask('copyhtml', ['copy:html'] );
  	 grunt.registerTask('imgglobal', ['copy:global'] );
 };