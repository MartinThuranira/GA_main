class Population
{
  
  constructor(num,m,p)
  {
    this.target=p;
    this.mutationRate=m;
    this.generations=0;
    this.maxfitness=0;
    this.matingpool=[];
    this.finished=false;
    this.population;
    this.perfectScore=1;
    this.best=("");
    
    for(let i=0;i<num;i++){
      this.population[i]=Object.create(DNA(this.target.length));
       this.calcFitness();
    }
  }
  calcFitness()
  {
    for(let i=0;i<this.popupation.length;i++){
      this.population[i].calcFitness(target);
    }
  }
  
  naturalSelection()
  {
    //calculate maxfitness
    for(let i=0;i<this.population.length;i++){      
      if(maxfitness<this.population[i].fitness){        
        maxfitness=this.population[i].fitness;
    }
  }

  //create matingpool
  for(let i=0;i<this.population.length;i++){
    let fitness=floor(map(this.population[i].fitness,0,maxfitness,0,1));
    let level=fitness*100;
    for(let j=0;j<level;j++){
      this.matingpool.push(this.population[i]);
      }
    }
  }
  
  generate()
  {
    for(let i=0;i<this.population.length;i++){
      let a =floor(random(0,this.matingpool.length));
      let b =floor(random(0,this.matingpool.length));
      
      let partnerA=this.matingpool[a];
      let partnerB=this.matingpool[b];
      
      let child = partnerA.crossover(partnerB);
      this.population[i]=child;
    }this.generations++;
  }
  
  evaluate()
  {
    index=0;
    worldRecord=0.0;
    for(let i=0;i<this.population.length;i++){
      if(this.population[i].fitness>worldRecord){
        index=i;
        worldRecord=this.population[i].fitness;
      }
    }
    this.best=this.population[index].getPhrase();
    
    if(worldRecord===this.perfectScore){
      this.finished=true;
    }
  }
  
  getBest()
  {
    return this.best;
  }
  
  isFinished()
  {
    return this.finished;
  }
  
  getGenerations()
  {
    return this.generations;
  }
   
  // Compute average fitness for the population
  getAverageFitness()
  {
    let total = 0;
    for (let i = 0; i < this.population.length; i++) {
      total += this.population[i].fitness;
    }
    return total / (this.population.length);
  }

  allPhrases()
  {
    let everything = "";

    let displayLimit = min(this.population.length, 50);


    for (let i = 0; i < displayLimit; i++) {
      everything += this.population[i].getPhrase() + "<br>";
    }
    return everything;
  }
}
