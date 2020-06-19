class SceneF extends Phaser.Scene{
    constructor(){
    super({
    key: 'SceneF'
    });
    }
    init() {
    console.log('Escena F');
    
                                      
    }

    create() {
        this.m1 = this.sound.add("m1",{volume: 4});
        this.m2 = this.sound.add("m2",{volume: 4});
        this.m3 = this.sound.add("m3",{volume: 4});

        this.m1.play();
        
        this.registry.events.on('m1', (m1) => {
            console.log('Cambio música a menu');
            this.m1.play();
            this.m2.stop();
            this.m3.stop();
                           });
             this.registry.events.on('m2', (m2) => {
            console.log('Cambio música lvl 1');
            this.m2.play();
            this.m1.stop();
            this.m3.stop();
                           });
            this.registry.events.on('m3', (m3) => {
            console.log('Cambio música lvl 2');
            this.m1.stop();
            this.m2.stop();
            this.m3.play();
        });

    


                }


    update(time, delta) {
        
    }
}
    export default SceneF;