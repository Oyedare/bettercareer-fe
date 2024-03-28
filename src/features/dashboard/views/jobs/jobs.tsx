import { Heading, Text, Flex, CallToAction } from '@labs/components';
import React from 'react';
import styles from './jobs.module.scss';
import JobCard from './job-card';
import DribbbleLogo from '../../../../../public/images/dashboard/Company_Logo.svg';
import { Seperator } from './job-card';

const JobData = [
	{
		key: 0,
		companyLogo: <DribbbleLogo />,
		jobTitle: 'Brand Designer',
		companyName: 'Dribbble',
		location: 'California',
		salaryRange: '$120k - $140k',
		tags: ['Remote', 'Internship', 'Full-Time'],
		time: '1hr ago',
		summary: `
		Are you a creative visionary with a passion for crafting
		exceptional brand experiences? Do you thrive in translating
		brand strategies into captivating visuals that resonate with
		audiences? If so, then we want you on our team! We're
		searching for a talented Brand Designer to play a pivotal
		role in shaping the visual identity of our brand. You'll be
		the mastermind behind everything from our logo and brand
		guidelines to marketing materials and social media graphics.
		`,
		isRequirementsText: false,
		requirementsArray: [
			`
			Minimum 3+ years of experience in brand design or a
			related field, with a strong portfolio showcasing your
			design expertise and ability to create a cohesive
			brand identity.
			`,
			`
			Software mastery: Proficiency in Adobe Creative Suite
			(Photoshop, Illustrator, InDesign) or similar design
			software is essential.
			`,
			`
			Eye for detail: A keen eye for detail and a commitment
			to producing high-quality, pixel-perfect designs are
			non-negotiable.
			`,
			`
			Brand storytelling: You possess a deep understanding
			of how visual design can shape brand perception and
      effectively communicate brand messages.
			`,
			`
			Team player with a twist: You thrive in a
			collaborative environment while maintaining the
			creative independence to bring fresh ideas to the
			table.
			`,
		],
	},
	{
		key: 1,
		companyLogo: <DribbbleLogo />,
		jobTitle: 'Brand Designer',
		companyName: 'Dribbble',
		location: 'California',
		salaryRange: '$120k - $140k',
		tags: ['Remote', 'Internship', 'Full-Time'],
		time: '1hr ago',
		summary: `
		Are you a creative visionary with a passion for crafting
		exceptional brand experiences? Do you thrive in translating
		brand strategies into captivating visuals that resonate with
		audiences? If so, then we want you on our team! We're
		searching for a talented Brand Designer to play a pivotal
		role in shaping the visual identity of our brand. You'll be
		the mastermind behind everything from our logo and brand
		guidelines to marketing materials and social media graphics.
		`,
		isRequirementsText: false,
		requirementsArray: [
			`
			Minimum 3+ years of experience in brand design or a
			related field, with a strong portfolio showcasing your
			design expertise and ability to create a cohesive
			brand identity.
			`,
			`
			Software mastery: Proficiency in Adobe Creative Suite
			(Photoshop, Illustrator, InDesign) or similar design
			software is essential.
			`,
			`
			Eye for detail: A keen eye for detail and a commitment
			to producing high-quality, pixel-perfect designs are
			non-negotiable.
			`,
			`
			Brand storytelling: You possess a deep understanding
			of how visual design can shape brand perception and
      effectively communicate brand messages.
			`,
			`
			Team player with a twist: You thrive in a
			collaborative environment while maintaining the
			creative independence to bring fresh ideas to the
			table.
			`,
		],
	},
	{
		key: 2,
		companyLogo: <DribbbleLogo />,
		jobTitle: 'Brand Designer',
		companyName: 'Dribbble',
		location: 'California',
		salaryRange: '$120k - $140k',
		tags: ['Remote', 'Internship', 'Full-Time'],
		time: '1hr ago',
		summary: `
		Are you a creative visionary with a passion for crafting
		exceptional brand experiences? Do you thrive in translating
		brand strategies into captivating visuals that resonate with
		audiences? If so, then we want you on our team! We're
		searching for a talented Brand Designer to play a pivotal
		role in shaping the visual identity of our brand. You'll be
		the mastermind behind everything from our logo and brand
		guidelines to marketing materials and social media graphics.
		`,
		isRequirementsText: false,
		requirementsArray: [
			`
			Minimum 3+ years of experience in brand design or a
			related field, with a strong portfolio showcasing your
			design expertise and ability to create a cohesive
			brand identity.
			`,
			`
			Software mastery: Proficiency in Adobe Creative Suite
			(Photoshop, Illustrator, InDesign) or similar design
			software is essential.
			`,
			`
			Eye for detail: A keen eye for detail and a commitment
			to producing high-quality, pixel-perfect designs are
			non-negotiable.
			`,
			`
			Brand storytelling: You possess a deep understanding
			of how visual design can shape brand perception and
      effectively communicate brand messages.
			`,
			`
			Team player with a twist: You thrive in a
			collaborative environment while maintaining the
			creative independence to bring fresh ideas to the
			table.
			`,
		],
	},
];

function JobDescriptionTitle({ title }: { title: string }) {
	return (
		<Text as="span" weight={600} className="mb-3">
			{title}
		</Text>
	);
}

function JobDescriptionBody({
	children,
	isChildText = true,
}: {
	children: React.ReactNode;
	isChildText?: boolean;
}) {
	return isChildText ? (
		<Text
			as="p"
			size="sm"
			weight={500}
			lineHeight="20px"
			className="text-[#273643]"
		>
			{children}
		</Text>
	) : (
		<div className="text-sm font-medium leading-5 text-[#273643]">
			{children}
		</div>
	);
}

export const Jobs = () => {
	const [activeJobCardIndex, setActiveJobCardIndex] = React.useState<
		number | null
	>(null);
	return (
		<div>
			{/* TODO: TEMP */}
			<div className="min-h-[20vh]">Header</div>
			<Flex.Row gap={32} className="mb-10">
				<Flex.Column gap={24} flex="5">
					{JobData.map((job) => (
						<JobCard
							{...job}
							onClick={() => {
								setActiveJobCardIndex(job.key);
							}}
							className={
								activeJobCardIndex === job.key ? '!border-[#1388f2]' : ''
							}
						/>
					))}
				</Flex.Column>
				<Flex.Column
					flex="8"
					gap={40}
					className="py-8 px-[30px] rounded-2xl bg-white border border-[#f3f4f4] border-solid"
				>
					{activeJobCardIndex !== null ? (
						<Flex.Column gap={40}>
							<Flex.Row justifyContent="space-between">
								<Flex.Row gap={18}>
									{JobData[activeJobCardIndex].companyLogo}
									<Flex.Column gap={4} className="font-[Figtree]">
										<Text as="span" weight={600} fontSize="18px" inheritFont>
											{JobData[activeJobCardIndex].jobTitle}
										</Text>
										<Text
											color="var(--text-gray)"
											weight={500}
											lineHeight="24px"
											inheritFont
										>
											{JobData[activeJobCardIndex].companyName}
											<Seperator />
											{JobData[activeJobCardIndex].location}
											<Seperator />
											{JobData[activeJobCardIndex].salaryRange}
										</Text>
									</Flex.Column>
								</Flex.Row>
								<Flex.Row gap={8}>
									<CallToAction size="sm">Apply</CallToAction>
									<CallToAction outline size="sm">
										Save
									</CallToAction>
								</Flex.Row>
							</Flex.Row>
							<Flex.Column gap={32}>
								<div>
									<JobDescriptionTitle title="Summary" />
									<JobDescriptionBody
										children={JobData[activeJobCardIndex].summary}
									/>
								</div>
								<div>
									<JobDescriptionTitle title="Requirements" />
									<JobDescriptionBody
										isChildText={JobData[activeJobCardIndex].isRequirementsText}
										children={
											<ul className="list-disc list-inside">
												{JobData[activeJobCardIndex].requirementsArray.map(
													(req) => (
														<li key={req.slice(0, 10)} className="mb-4">
															{req}
														</li>
													)
												)}
											</ul>
										}
									/>
								</div>
							</Flex.Column>
						</Flex.Column>
					) : (
						<p>Pick a job on the left</p>
					)}
				</Flex.Column>
			</Flex.Row>
		</div>
	);
};
