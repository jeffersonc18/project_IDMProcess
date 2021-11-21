import { Controller, Get , Post , Put , Delete , Res , HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import { CreateDocumentDTO } from './dto/document.dto';

import { DocumentService } from './document.service';

@Controller('document')
export class DocumentController {
    
    constructor(private documentService:DocumentService){}

    @Post('/create')
    async createPost(@Res() res, @Body() createDocumentDTO:CreateDocumentDTO){
       const document = await this.documentService.createDocument(createDocumentDTO);
       
        return res.status(HttpStatus.OK).json({
            message: 'Document Successsfully Created',
            document //document:document
        });

    }

    @Get('/')
    async getDocuments(@Res() res ){
        const documents = await this.documentService.getDocuments();
        return res.status(HttpStatus.OK).json({
            documents  //documents:documents
        }) 
    }

    @Get('/:documentID')
    async getDocument(@Res() res, @Param('documentID') documentID){
        const document = await this.documentService.getDocument(documentID);
        if (!document) throw new NotFoundException ('Document does not exist');
        return res.status(HttpStatus.OK).json(document);
    }

    @Delete('/delete')
    async deleteDocument(@Res() res, @Query('documentID') documentID){
        const documentDeleted= await this.documentService.deleteDocument(documentID);
        if (!documentDeleted) throw new NotFoundException ('Document does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Document Deleted Successfully',
            documentDeleted //documentDeleted:documentDeleted 
        }); 
    }

    @Put('/update')
    async updateDocument(@Res() res, @Body() createDocumentDTO:CreateDocumentDTO, @Query('documentID') documentID){
        const documentUpdated = await this.documentService.updateDocument(documentID,createDocumentDTO);
        if (!documentUpdated) throw new NotFoundException ('Document does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Document Updated Successfully',
            documentUpdated
        })
    }
}
