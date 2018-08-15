function newChar(){
  let c = floor(random(63, 122));
  if (c === 63) c = 32;
  if (c === 64) c = 46;

  return String.fromCharCode(c);
}

class DNA{
  
  constructor(num){
    this.genes=[];
    this.fitness=0;
    
    for (let i=0; i<num;i++){
      this.genes[i]=newChar();
    }
    
  calcFitness(target)
  {
    let score=0;
    for(let i=0;i<this.genes.length;i++){
      if(this.genes[i]===target[i]){
        score++;
      }
    }fitness=score/target.length;
  }
  
  getPhrase()
  {
    return this.genes.join("");
  }
  
  mutate(mutationRate)
  {
    for(let i=0;i<this.genes.length;i++){
      if(random(1)<mutationRate){
        this.genes[i]=newChar();
      }
    }
  }
  
  crossover(partner)
  {
    
    let child=Object.create(DNA(this.genes.length));
    
    for(let i=0;i<this.genes.length;i++){
      if(i>midpoint){
        child.genes[i]=this.genes[i];
      }else{
        child.genes[i]=partner.genes[i];
      }
      child.mutate(mutationRate);
    }
    return child;
  }
}
}
