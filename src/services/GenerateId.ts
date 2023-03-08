import {v4} from 'uuid'

export abstract class GenerateId{
    static newID = ()=>{
        return v4()
    }
}