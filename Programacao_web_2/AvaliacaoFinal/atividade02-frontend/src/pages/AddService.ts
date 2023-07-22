export interface AddVideo {
    id?: string;
    descricao: string;
    link: string; 
  }
  
  export class AddVideoService {
    static list: AddVideo[] = []
    
    static salvar(addvideo: AddVideo){
      if (addvideo.id) {
        const index = AddVideoService.list.findIndex(a => a.id == addvideo.id)
        AddVideoService.list[index].descricao = addvideo.descricao
        AddVideoService.list[index].link = addvideo.link
      } else {
        addvideo.id = Math.random().toString(36)
        AddVideoService.list.push(addvideo)
      }
    }
  
    static buscarPorId(id: string): AddVideo | undefined {
      return this.list.find(addvideo => addvideo.id == id);
    }
  }