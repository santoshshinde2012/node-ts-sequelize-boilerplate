import { Router } from 'express';
import SystemStatusController from './components/system-status/system-status.controller';
import EnquiryController from './components/enquiry/enquiry.controller';

/**
 * Here, you can register routes by instantiating the controller.
 *
 */
export default function registerRoutes(): Router {
	const router = Router();

	// System Status Controller
	const systemStatusController: SystemStatusController =
		new SystemStatusController();
	router.use('/system', systemStatusController.register());

	
	const enquiryController: EnquiryController =
	new EnquiryController();
	router.use('/enquiries', enquiryController.register());

	return router;
}
