import { StatusCodes } from 'http-status-codes';
import ApiError from "../../abstractions/ApiError";
import Enquiry, { EnquiryInput, EnquiryOuput } from "../../database/entities/enquiries";

export class EnquiryService {

    async getAll(): Promise<EnquiryOuput[]> {
        const enquiries = await
            Enquiry.findAll();
        return enquiries;
    }

    async getById(id: string | number): Promise<EnquiryOuput> {
        const enquiry = await
            Enquiry.findByPk(id)
        return enquiry;
    }

    async update(id: string | number, payload: Partial<EnquiryInput>): Promise<EnquiryOuput> {
        const enquiry = await Enquiry.findByPk(id)
        if (!enquiry) {
            // @todo throw custom error
            throw new ApiError('Not found', StatusCodes.BAD_REQUEST)
        }
        const updatedEnquiry = await enquiry.update(payload)
        return updatedEnquiry;
    }

    async create(payload: EnquiryInput): Promise<EnquiryOuput> {
        const enquiry = await Enquiry.create(payload)
        return enquiry;
    }

    async delete(id: string | number): Promise<boolean> {
        const deletedEnquiryCount = await Enquiry.destroy({
            where: { id }
        })

        return !!deletedEnquiryCount;
    }
}
