// app/data/news/articles/index.ts

import centralPierSaga from './articles/2023-10-01--central-pier-saga-enters-a-new-phase.json'
import salterBrothersSet from './articles/2023-10-01--salter-brothers-set-a-new-vision-for-historic-collins-street-address.json'
import victoriaSetsAmbitiousTarget from './articles/2023-10-15--victoria-sets-ambitious-target-to-replace-44-public-housing-towers.json'
import primeCremorneDevelopment from './articles/2023-10-20--prime-cremorne-development-site-hits-the-market.json'
import younghusbandRedevelopment from './articles/2023-10-25--younghusband-redevelopment-receives-approval-recommendatio.json'
import recruitmentWeKeepItExclusive from './articles/2023-10-26--recruitment-we-keep-it-exclusive-heres-why-you-should-too.json'
import goldenAge from './articles/2023-11-01--golden-age-delivers-a-golden-handshake-to-residential.json'
import jamFactoryRedevelopment from './articles/2023-11-01--jam-factory-redevelopment-one-step-closer-after-planning-win.json'
import vicGovNames from './articles/2023-11-01--vic-gov-names-10-suburbs-to-receive-thousands-of-new-homes.json'
import developerToRebuild from './articles/2023-11-08--developer-to-rebuild-historic-corkman-hotel-after-planning-defeat.json'
import australiasFirstSkyscraper from './articles/2023-11-10--australias-first-skyscraper-sells-for-155-million.json'
import commensurateWithExperience from './articles/2023-11-15--commensurate-with-experience-what-does-that-really-mean.json'
import nightingaleBrunswick from './articles/2023-12-01--nightingale-brunswick-wins-premiers-sustainability-award.json'
import rmitBtrGetsApproval from './articles/2023-12-01--rmit-btr-gets-approval-and-a-warning.json'
import significantSaleKickstart from './articles/2023-12-01--significant-sale-kickstarts-1-billion-portfolio.json'
import timeAndPlaceSecures from './articles/2023-12-10--time-and-place-secures-approval-for-hotel-lindrum-redevelopment.json'
import gamudaWinsApproval from './articles/2023-12-15--gamuda-wins-approval-for-st-kilda-road-office-tower.json'
import avoidTheShitBuilder from './articles/2023-12-21--avoid-the-shit-builder-merry-go-round-and-other-end-of-year-insights.json'
import longAwaitedModellingReveals from './articles/2024-01-01--long-awaited-modelling-reveals-serious-flooding-threat-for-docklands-southbank-and-fishermans-bend.json'
import nexusAndAma from './articles/2024-01-01--nexus-and-ama-scoop-up-north-east-link-tenders.json'
import theAflAndTheVicGovernment from './articles/2024-01-01--the-afl-and-the-vic-government-pair-up-to-reinvigorate-docklands.json'
import cityOfBayside from './articles/2024-01-26--city-of-bayside-rejects-golden-age-groups-big-plans-for-brighton.json'
import yarraCouncil from './articles/2024-01-26--yarra-council-turns-off-the-gas-taps.json'
import hamtonHawthornWins from './articles/2024-02-01--hamton-hawthorn-wins-ministerial-approval.json'
import heritageVictoria from './articles/2024-02-01--heritage-victoria-greenlights-gurrowa-place-towers-at-queen-vic-market.json'
import rosebudPlaza from './articles/2024-02-01--rosebud-plaza-sells-for-135-million.json'
import payGapOrOpportunity from './articles/2024-02-20--pay-gap-or-opportunity-how-to-bring-more-diversity-into-your-business.json'
import angleseaEcotourismProject from './articles/2024-02-26--anglesea-ecotourism-project-takes-the-next-step.json'
import saltaPuts63exhibition from './articles/2024-02-26--salta-puts-63-exhibition-street-back-on-the-market.json'
import takeThese5tinyActions from './articles/2024-04-01--take-these-5-tiny-actions-today-for-big-career-gains-tomorrow.json'
import top5challengesFacingVictorian from './articles/2024-05-26--the-top-5-challenges-facing-victorian-developers-in-2024.json'
import reflectingOnThe2023financialYear from './articles/2024-06-01--reflecting-on-the-2023-financial-year-and-insights-for-2024.json'
import thinkNotWhatYourEmployerShouldDoForYou from './articles/2024-07-31--think-not-what-your-employer-should-do-for-you-but-what-you-can-do-for-your-employer-and-your-career-development.json'
import theLawOfAttractionInRecruitment from './articles/2024-08-26--the-law-of-attraction-in-recruitment-are-you-attractive-top-talent-is-your-business-attractive-to-top-talent.json'
import perspectiveDiscrepancyWhatEmployers from './articles/2024-09-26--perspective-discrepancy-what-employers-really-think-about-your-reasons-for-wanting-to-change-jobs.json'
import aiInRecruitmentABlessing from './articles/2024-11-01--ai-in-recruitment-a-blessing-a-curse-or-just-the-new-normal.json'
import unlockingPotentialARecruiters from './articles/2025-01-15--unlocking-potential-a-recruiters-guide-to-spotting-it-and-an-employees-guide-to-fulfilling-it.json'
import stopWinningWhyLeadership from './articles/2025-02-01--stop-whining-start-winning-why-leadership-not-complaints-will-make-or-break-your-career.json'
import insideTheMindOfARecruiter from './articles/2025-03-01--inside-the-mind-of-a-recruiter-20-years-of-lessons-lies-laughs.json'
import twentyYears5Lessons from './articles/2025-04-01--20-years-5-lessons-and-a-hell-of-a-lot-of-coffee-a-recruiters-survival-guide-for-construction-property.json'
import whatMelbournesBestInConstructionProperty from './articles/2025-05-01--what-melbournes-best-in-construction-property-do-to-get-the-guernsey.json'
import salaryReviewArticle from './articles/2025-06-26--salary-review-season-where-everyones-underpaid-just-ask-them.json'
import hiddenCostsChasing from './articles/2025-07-04--the-hidden-costs-of-chasing-the-money.json'

import type { Article } from '@/app/types/article'

export const articleMap: Record<string, Article> = {
  [rmitBtrGetsApproval.slug]: rmitBtrGetsApproval,
  [significantSaleKickstart.slug]: significantSaleKickstart,
  [timeAndPlaceSecures.slug]: timeAndPlaceSecures,
  [gamudaWinsApproval.slug]: gamudaWinsApproval,
  [avoidTheShitBuilder.slug]: avoidTheShitBuilder,
  [longAwaitedModellingReveals.slug]: longAwaitedModellingReveals,
  [nexusAndAma.slug]: nexusAndAma,
  [theAflAndTheVicGovernment.slug]: theAflAndTheVicGovernment,
  [cityOfBayside.slug]: cityOfBayside,
  [yarraCouncil.slug]: yarraCouncil,
  [hamtonHawthornWins.slug]: hamtonHawthornWins,
  [heritageVictoria.slug]: heritageVictoria,
  [rosebudPlaza.slug]: rosebudPlaza,
  [payGapOrOpportunity.slug]: payGapOrOpportunity,
  [angleseaEcotourismProject.slug]: angleseaEcotourismProject,
  [saltaPuts63exhibition.slug]: saltaPuts63exhibition,
  [takeThese5tinyActions.slug]: takeThese5tinyActions,
  [top5challengesFacingVictorian.slug]: top5challengesFacingVictorian,
  [reflectingOnThe2023financialYear.slug]: reflectingOnThe2023financialYear,
  [thinkNotWhatYourEmployerShouldDoForYou.slug]: thinkNotWhatYourEmployerShouldDoForYou,
  [theLawOfAttractionInRecruitment.slug]: theLawOfAttractionInRecruitment,
  [perspectiveDiscrepancyWhatEmployers.slug]: perspectiveDiscrepancyWhatEmployers,
  [aiInRecruitmentABlessing.slug]: aiInRecruitmentABlessing,
  [unlockingPotentialARecruiters.slug]: unlockingPotentialARecruiters,
  [stopWinningWhyLeadership.slug]: stopWinningWhyLeadership,
  [insideTheMindOfARecruiter.slug]: insideTheMindOfARecruiter,
  [twentyYears5Lessons.slug]: twentyYears5Lessons,
  [whatMelbournesBestInConstructionProperty.slug]: whatMelbournesBestInConstructionProperty,
  [salaryReviewArticle.slug]: salaryReviewArticle,
  [hiddenCostsChasing.slug]: hiddenCostsChasing,
  [nightingaleBrunswick.slug]: nightingaleBrunswick,
  [commensurateWithExperience.slug]: commensurateWithExperience,
  [goldenAge.slug]: goldenAge,
  [jamFactoryRedevelopment.slug]: jamFactoryRedevelopment,
  [australiasFirstSkyscraper.slug]: australiasFirstSkyscraper,
  [vicGovNames.slug]: vicGovNames,
  [developerToRebuild.slug]: developerToRebuild,
  [recruitmentWeKeepItExclusive.slug]: recruitmentWeKeepItExclusive,
  [younghusbandRedevelopment.slug]: younghusbandRedevelopment,
  [salterBrothersSet.slug]: salterBrothersSet,
  [primeCremorneDevelopment.slug]: primeCremorneDevelopment,
  [centralPierSaga.slug]: centralPierSaga,
  [victoriaSetsAmbitiousTarget.slug]: victoriaSetsAmbitiousTarget,
}
