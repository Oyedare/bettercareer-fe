import React from 'react';
import { Avatar, DropdownMenu, TextField } from '@radix-ui/themes';
import Link from 'next/link';
import { Flex, Text, Container } from '@labs/components';
import classNames from 'classnames';
import { useRouter } from 'next/router';

import MagnifyingGlassIcon from '@labs/icons/dashboard/search.svg';
import BellIcon from '@labs/icons/dashboard/notification.svg';

import Logo from '@labs/icons/logo.svg';
import Help from '@labs/icons/dashboard/help.svg';
import ArrowDown from '@labs/icons/dashboard/down.svg';
import LogoMark from '@labs/icons/logo-mark.svg';

import styles from './header.module.scss';
const NAVIGATION = [
	{
		title: 'Home',
		href: '/dashboard',
	},
	{
		title: 'Jobs',
		href: '/dashboard/jobs',
	},
	{
		title: 'Applications',
		href: '/dashboard/applications',
	},
	{
		title: 'Resumes',
		href: '/dashboard/resumes',
	},
];

export const DashboardHeader = () => {
	const router = useRouter();
	const [isScrolled, setIsScrolled] = React.useState(false);

	React.useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<div
				className={classNames([
					styles.DashboardHeader,
					isScrolled && styles.scrolled,
				])}
			>
				<Container maxWidth="xl" className={styles.DashboardWrapper}>
					<Flex
						className={styles.DashboardHeaderLeft}
						alignItems="center"
						gap={40}
					>
						<Logo className="hidden lg:block" />
						<LogoMark className="lg:hidden block h-[40px]" />

						<Flex
							gap={24}
							flexWrap="wrap"
							className={styles.DashboardHeaderLeftItems}
						>
							{NAVIGATION.map((item, index) => (
								<Link
									href={item.href}
									key={index}
									className={classNames([
										styles.DashboardHeaderMenuItem,
										[router.asPath, router.pathname].includes(item.href) &&
											styles.active,
									])}
								>
									<Text>{item.title}</Text>
								</Link>
							))}
						</Flex>
					</Flex>
					<Flex
						className={styles.DashboardHeaderRight}
						alignItems="center"
						gap={18}
					>
						<TextField.Root className={styles.DashboardHeaderSearch}>
							<TextField.Slot>
								<MagnifyingGlassIcon height="16" width="16" />
							</TextField.Slot>
							<TextField.Input placeholder="Search in 400k jobs..." />
						</TextField.Root>

						<Link
							href="/dashboard/notification"
							className={styles.DashboardHeaderNotification}
						>
							<Help height="18" width="18" />
						</Link>
						<Link
							href="/dashboard/notification"
							className={styles.DashboardHeaderNotification}
						>
							<BellIcon height="18" width="18" />
						</Link>
						<DropdownMenu.Root>
							<DropdownMenu.Trigger>
								<div className={styles.DashboardHeaderProfile}>
									<Flex alignItems="center" gap={8}>
										<Avatar
											src=""
											fallback={'AW'}
											variant="solid"
											radius="full"
											size="2"
										/>
										<ArrowDown />
									</Flex>
								</div>
							</DropdownMenu.Trigger>
							<DropdownMenu.Content>
								<DropdownMenu.Item>Account Profile</DropdownMenu.Item>
								<DropdownMenu.Item>Settings</DropdownMenu.Item>
								<DropdownMenu.Separator />
								<DropdownMenu.Item color="red">Logout</DropdownMenu.Item>
							</DropdownMenu.Content>
						</DropdownMenu.Root>
					</Flex>
				</Container>
			</div>
			<div
				className={classNames([
					styles.DashboardHeaderSpacer,
					isScrolled && styles.scrolled,
				])}
			/>
		</>
	);
};