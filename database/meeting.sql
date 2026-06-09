-- ============================================================
-- Meeting Scheduler — Database Export
-- Dev-team meeting management system
--
-- Complete, self-contained script: creates the schema and
-- inserts seed data. Run against MySQL to recreate the DB.
--
-- IMPORTANT: the database name below MUST match the one in
-- your backend config (default.json). Change it in both if
-- you used a different name.
-- ============================================================

CREATE DATABASE IF NOT EXISTS `meetings`;
USE `meetings`;

SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `meetings`;
DROP TABLE IF EXISTS `teams`;

-- ---------------------- Teams ----------------------
CREATE TABLE `teams` (
  `id`         CHAR(36)     NOT NULL,
  `name`       VARCHAR(255) NOT NULL,
  `created_at` DATETIME     NOT NULL,
  `updated_at` DATETIME     NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ---------------------- Meetings ----------------------
CREATE TABLE `meetings` (
  `id`          CHAR(36)     NOT NULL,
  `team_id`     CHAR(36)     NOT NULL,
  `start_time`  DATETIME     NOT NULL,
  `end_time`    DATETIME     NOT NULL,
  `description` TEXT         NOT NULL,
  `room`        VARCHAR(255) NOT NULL,
  `created_at`  DATETIME     NOT NULL,
  `updated_at`  DATETIME     NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`team_id`) REFERENCES `teams` (`id`)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

SET FOREIGN_KEY_CHECKS = 1;

-- ---------------------- Seed: Teams ----------------------
INSERT INTO `teams` (`id`, `name`, `created_at`, `updated_at`) VALUES
  ('11111111-1111-1111-1111-111111111111', 'UI Team',     NOW(), NOW()),
  ('22222222-2222-2222-2222-222222222222', 'Mobile Team', NOW(), NOW()),
  ('33333333-3333-3333-3333-333333333333', 'React Team',  NOW(), NOW());

-- ---------------------- Seed: Meetings ----------------------
-- Start times deliberately span past (should render GREEN in the UI)
-- and future (should render ORANGE) relative to mid-2026, so the
-- date-based card coloring is testable immediately.
-- Every team has one past and one future meeting.
INSERT INTO `meetings`
  (`id`, `team_id`, `start_time`, `end_time`, `description`, `room`, `created_at`, `updated_at`) VALUES
  ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '11111111-1111-1111-1111-111111111111', '2025-01-15 10:00:00', '2025-01-15 11:30:00', 'Past UI sync - reviewed Q4 design tokens',   'Blue Room',        NOW(), NOW()),
  ('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', '11111111-1111-1111-1111-111111111111', '2027-03-20 14:00:00', '2027-03-20 15:00:00', 'Future UI planning - component library v2',  'New York Room',    NOW(), NOW()),
  ('cccccccc-cccc-cccc-cccc-cccccccccccc', '22222222-2222-2222-2222-222222222222', '2025-06-01 09:00:00', '2025-06-01 10:00:00', 'Past mobile standup - release retro',        'Large Board Room', NOW(), NOW()),
  ('dddddddd-dddd-dddd-dddd-dddddddddddd', '22222222-2222-2222-2222-222222222222', '2027-08-10 13:00:00', '2027-08-10 14:30:00', 'Future mobile release - v3 kickoff',         'Blue Room',        NOW(), NOW()),
  ('eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee', '33333333-3333-3333-3333-333333333333', '2026-12-25 11:00:00', '2026-12-25 12:00:00', 'Future React review - hooks migration',      'New York Room',    NOW(), NOW()),
  ('ffffffff-ffff-ffff-ffff-ffffffffffff', '33333333-3333-3333-3333-333333333333', '2025-09-05 15:00:00', '2025-09-05 16:00:00', 'Past React review - performance audit',      'Large Board Room', NOW(), NOW());
