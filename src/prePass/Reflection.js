define(function(require) {

    var Base = require('../core/Base');
    var Vector4 = require('../math/Vector4');

    var ReflectionPass = Base.derive(function() {
    
    }, {
        render : function(renderer, scene, camera) {

        }
    });

    return ReflectionPass;
});