import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core'

export enum EntityState {
  ACTIVE = 'active',
  DISABLED = 'disabled',
}

export const entities = pgTable('entities', {
  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
  id: uuid('id').defaultRandom().primaryKey(),
  privy_did: varchar('privy_did').unique().notNull(),
  state: varchar('state').$type<EntityState>().notNull(),
  disabledAt: timestamp('disabled_at', { withTimezone: true }),
})
