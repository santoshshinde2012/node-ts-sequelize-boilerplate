import { NextFunction, Request, Response, Router } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import BaseApi from '../BaseApi';
import { EnquiryService } from './enquiry.service';
import { EnquiryOuput } from '../../database/entities/enquiries';

/**
 * Enquiry controller
 */
export default class EnquiryController extends BaseApi {

	private enquiry: EnquiryService;
	
	constructor() {
		super();
		this.enquiry = new EnquiryService();
	}

	/**
	 *
	 */
	public register(): Router {
		this.router.get('/', this.getEnquiries.bind(this));
		this.router.get('/:id', this.getEnquiry.bind(this));
		this.router.post('/', this.createEnquiry.bind(this));
		this.router.put('/:id', this.updateEnquiry.bind(this));
		this.router.delete('/:id', this.delete.bind(this));
		return this.router;
	}

	/**
	 *
	 * @param req
	 * @param res
	 * @param next
	 */
	public async getEnquiries(
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		try {
			const enquiries: EnquiryOuput[] = await this.enquiry.getAll();
			res.locals.data = enquiries;
			// call base class method
			super.send(res);
		} catch (err) {
			next(err);
		}
	}

	/**
	 *
	 * @param req
	 * @param res
	 * @param next
	 */
	public async getEnquiry(
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		try {
			const id = req.params.id;
			const enquiry: EnquiryOuput = await this.enquiry.getById(id);
			res.locals.data = enquiry;
			// call base class method
			super.send(res);
		} catch (err) {
			next(err);
		}
	}

	/**
	 *
	 * @param req
	 * @param res
	 * @param next
	 */
	public async updateEnquiry(
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		try {
			const id = req.params.id;
			const { body } = req;
			const enquiry: EnquiryOuput = await this.enquiry.update(id, body);
			res.locals.data = { 
				enquiry
			};
			// call base class method
			super.send(res);
		} catch (err) {
			next(err);
		}
	}

	/**
	 *
	 * @param req
	 * @param res
	 * @param next
	 */
	public async createEnquiry(
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		try {
			const { body } = req;
			const enquiry: EnquiryOuput = await this.enquiry.create(body);
			res.locals.data = {
				enquiry
			};
			// call base class method
			super.send(res);
		} catch (err) {
			next(err);
		}
	}

	/**
	 *
	 * @param req
	 * @param res
	 * @param next
	 */
	public async delete(
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		try {
			const id = req.params.id;
			const status: boolean = await this.enquiry.delete(id);
			res.locals.data = {
				status
			};
			// call base class method
			super.send(res);
		} catch (err) {
			next(err);
		}
	}
}
