/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Documento } from './interfaces/document.interface'
import { CreateDocumentDTO } from './dto/document.dto'

@Injectable()
export class DocumentService {
    constructor(@InjectModel('Document') private readonly documentModel:Model<Documento> ){}

    async getDocuments(): Promise<Documento[]>{
        const documents = await this.documentModel.find();
        return documents;   
    }

    async getDocument(DocumentID:number   ): Promise<Documento>{
        const document = await this.documentModel.findById(DocumentID);
        return document;

    }

    async createDocument(createDocumentDTO: CreateDocumentDTO):Promise<Documento>{
        const document = new this.documentModel(createDocumentDTO);
        return await document.save();
        

    }

    async deleteDocument(documentID:number):Promise<Documento>{
        const deleteDocument = this.documentModel.findByIdAndDelete(documentID);
        return deleteDocument;
    }

    async updateDocument(documentID:number,createDocumentDTO:CreateDocumentDTO):Promise<Documento>{
        const updateDocument = await this.documentModel.findByIdAndUpdate(documentID,createDocumentDTO, {new:true});
        return updateDocument;

    }

}
