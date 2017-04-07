
        
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        
        const tones = [329.63,261.63,220,164.81];

        const samples = tones.map((tone)=>{
            let osc = audioCtx.createOscillator();
            osc.type = 'sine';
            osc.frequency.value = tone;
            osc.start(0.0); 
            return osc;
        });
        
            var gains = samples.map(function(osc){
            var g = audioCtx.createGain();
            osc.connect(g);
            g.connect(audioCtx.destination);
            g.gain.value = 0;
            return g;
        });
            

        export const playSounds = (i) =>{
            gains[i].gain.linearRampToValueAtTime(2, audioCtx.currentTime + .05);
        }

        export const stopSounds = () => {
            gains.forEach(function(s){
             s.gain.linearRampToValueAtTime(0, audioCtx.currentTime + .05);
            });
        }

    
