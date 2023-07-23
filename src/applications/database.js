import { PrismaClient } from "@prisma/client";
import { logger } from "./logging.js";

export const PrismaClients = new PrismaClient({
	log: [
		{
			emit: "event",
			level: "query",
		},
		{
			emit: "stdout",
			level: "error",
		},
		{
			emit: "stdout",
			level: "info",
		},
		{
			emit: "stdout",
			level: "warn",
		},
	],
});

PrismaClients.$on("error", (e) => {
	logger.error(e);
});
PrismaClients.$on("warn", (e) => {
	logger.warn(e);
});
PrismaClients.$on("info", (e) => {
	logger.info(e);
});
PrismaClients.$on("query", (e) => {
	logger.info(e);
});
