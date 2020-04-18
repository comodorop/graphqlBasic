
const cursos = [
  {titulo:"acd", tecnologia: "golang"},
  {titulo:"acd", tecnologia: "Python"},
  {titulo:"acd", tecnologia: "Node"}
]

const resolvers =  {
  Query:{
    obtenerCursos: (_, {input}, ctx, info) =>{
      console.log(ctx)
      const resultado = cursos.filter(curso=>{
        if(curso.tecnologia === input.tecnologia){
          return curso
        }
        
      })
      console.log(input)
      return resultado
    },
    obtenerTecnologia:()=>{
      return cursos
    }
  }
}

module.exports =  resolvers