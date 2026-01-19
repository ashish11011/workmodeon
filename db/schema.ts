import {
    pgTable, pgEnum, uuid, text, timestamp, boolean, integer,
    varchar
} from "drizzle-orm/pg-core";

/* ========= ENUMS ========= */
export const userRoleEnum = pgEnum("user_role", [
    "CANDIDATE",
    "COMPANY_ADMIN",
    "COMPANY_RECRUITER",
    "ADMIN",
]);

export const applicationStatusEnum = pgEnum("application_status", [
    "APPLIED",
    "SHORTLISTED",
    "REJECTED",
    "HIRED",
]);

export const jobTypeEnum = pgEnum("job_type", [
    "JOB",
    "INTERNSHIP",
    "FREELANCE",
]);

/* ========= USERS ========= */

export const notifications = pgTable('notifications', {
    id: uuid("id").defaultRandom().primaryKey(),
    senderId: uuid('user_id').references(() => users.id, {
        onDelete: 'cascade',
    }),
    receiverId: uuid('user_id').references(() => users.id, {
        onDelete: 'cascade',
    }),
    title: varchar('title', { length: 255 }),
    message: varchar('message', { length: 255 }),
    status: boolean('status').default(false).notNull(),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
});


export const users = pgTable("users", {
    id: uuid("id").defaultRandom().primaryKey(),
    role: userRoleEnum("role").notNull(),
    fullName: text("full_name").notNull(),
    email: text("email").notNull().unique(),
    phone: text("phone"),
    college: text("college"),
    course: text("course"),
    userToken: varchar('user_token', { length: 255 }),
    status: boolean('status').default(false).notNull(),
    isActive: boolean('is_active').default(false).notNull(),
    tokenExpiration: timestamp('total_expiration_time').defaultNow(),
    password: varchar('password', { length: 255 }).notNull(),

    profileImage: varchar('profile_image', { length: 255 }),

    parseId: varchar('parse_id', { length: 255 }),
    cognitoSub: varchar('cognito_sub', { length: 255 }),
    createdAt: timestamp("created_at").defaultNow(),
});

/* ========= COMPANIES ========= */
export const companies = pgTable("companies", {
    id: uuid("id").defaultRandom().primaryKey(),
    name: text("name").notNull(),
    description: text("description"),
    addressLine1: text("address_line_1"),
    addressLine2: text("address_line_2"),
    city: text("city"),
    state: text("state"),
    country: text("country"),
    pincode: text("pincode"),
    linkedInURL: text("linked_in_url"),
    email: text("email"),
    isAdminApproved: boolean("is_admin_approved").default(false).notNull(),
    number: text("number"),
    website: text("website"),
    createdByUserId: uuid("created_by_user_id")
        .references(() => users.id),
    createdAt: timestamp("created_at").defaultNow(),
});

/* ========= JOBS ========= */
export const jobs = pgTable("jobs", {
    id: uuid("id").defaultRandom().primaryKey(),
    companyId: uuid("company_id")
        .references(() => companies.id)
        .notNull(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    jobType: jobTypeEnum("job_type").notNull(),
    skillsRequired: text("skills_required"),
    isActive: boolean("is_active").default(true),
    createdAt: timestamp("created_at").defaultNow(),
});

/* ========= RESUMES ========= */
export const resumes = pgTable("resumes", {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
        .references(() => users.id)
        .notNull(),
    fileUrl: text("file_url").notNull(),
    isPrimary: boolean("is_primary").default(false),
    createdAt: timestamp("created_at").defaultNow(),
});

/* ========= APPLICATIONS ========= */
export const applications = pgTable("applications", {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
        .references(() => users.id)
        .notNull(),
    jobId: uuid("job_id")
        .references(() => jobs.id)
        .notNull(),
    resumeId: uuid("resume_id")
        .references(() => resumes.id),
    status: applicationStatusEnum("status").default("APPLIED"),
    appliedAt: timestamp("applied_at").defaultNow(),
});
