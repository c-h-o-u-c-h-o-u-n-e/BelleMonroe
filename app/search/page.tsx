"use client";
import Layout from "@/components/layout/Layout"
import Section1 from '@/components/sections/search/Section1'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function SearchContent() {
	const searchParams = useSearchParams();
	const query = searchParams.get('q') || '';

	return (
		<Layout classLisst="search">
			<Section1 searchQuery={query} />
		</Layout>
	);
}

export default function Search() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<SearchContent />
		</Suspense>
	)
}