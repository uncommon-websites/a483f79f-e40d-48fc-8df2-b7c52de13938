const security = {
	meta: {
		title: "Security",
		description: "Learn about our security practices and how we protect your data."
	},
	content: {
		lastUpdated: new Date().toISOString(),
		sections: [
			{
				title: "Data Protection",
				body: "We implement enterprise-grade security measures to protect your data with zero data egress policies and secure VPC deployment."
			},
			{
				title: "Infrastructure Security",
				body: "Our infrastructure is built on secure cloud platforms with encryption at rest and in transit, regular security audits, and compliance frameworks."
			},
			{
				title: "Access Controls",
				body: "We maintain strict access controls with multi-factor authentication, role-based permissions, and comprehensive audit logs for all data access."
			},
			{
				title: "Compliance",
				body: "We adhere to industry standards including SOC 2, GDPR, and other regulatory requirements for data handling and privacy."
			},
			{
				title: "Incident Response",
				body: "We have established incident response procedures to quickly identify, contain, and resolve any security issues while maintaining transparency with our clients."
			},
			{
				title: "Contact Security Team",
				body: "For security-related inquiries or to report vulnerabilities, please contact our security team at security@verita.ai."
			}
		]
	}
};

// Types
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	return security;
};