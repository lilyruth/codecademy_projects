// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

function pAequorFactory(num, dnaArray = mockUpStrand()) {
  return {
    specimenNum: num,
    dna: dnaArray,
    mutate() {
        let ind = Math.floor(Math.random() *15);
        let newBase = returnRandBase();
        if (this.dna[ind] === newBase) {
          while (this.dna[ind] === newBase) {
          newBase = returnRandBase();
           } 
          }
        this.dna[ind] = newBase;
        return this.dna;
        },
    compareDNA(anObj) {
       let counter = 0;
       for (let i = 0; i < 15; i++) {
          if (this.dna[i] === anObj.dna[i]) {
            counter++;  
            }
        }
       let samePercent = Math.floor((counter / 15) * 100 );
       return `Specimen ${this.specimenNum} and Specimen ${anObj.specimenNum} have ${samePercent}% DNA in common`
    },
    willLikelySurvive() {
      let counter = 0;
      for (let i = 0; i < this.dna.length; i++) {
        let base = this.dna[i];
        if (base === "C" || base === "G") {
          counter++;
        }
      }
      if (Math.floor(((counter / 15) * 100)) >= 60 ) {
        return true;
      } else {
        return false
        };
    }
  }
}

let survivalP = [];
let num = 1;

function theseWillSurvive() {
  while (survivalP.length < 30) {
    let temp = pAequorFactory(num, dnaArray = mockUpStrand());
    if (temp.willLikelySurvive() === true) {
      survivalP.push(temp)
    }
    num++;
  }
  return survivalP;
}
theseWillSurvive()
console.log(survivalP.length)






