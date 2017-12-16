<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * MobileData
 * @ApiResource(attributes={"filters"={"mobileData.search_filter"}})
 * @ORM\Table(name="mobile_data"))
 * @ORM\Entity
 */
class MobileData
{

    /**
     * @var integer
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     */
    private $id;

    /**
     * @var float
     *
     * @ORM\Column(name="expend", type="float", precision=10, scale=0, nullable=true)
     */
    private $expend;

    /**
     * @var float
     *
     * @ORM\Column(name="converted", type="float", precision=10, scale=0, nullable=true)
     */
    private $converted;

    /**
     * @var integer
     *
     * @ORM\Column(name="fuel_id", type="integer", nullable=true)
     */
    private $fuelId;

    /**
     * @var integer
     * @ORM\Column(name="mobile_id", type="integer", nullable=true)
     */
    private $mobileId;

    /**
     * @var integer
     * @ORM\Column(name="engine_id", type="integer", nullable=true)
     */
    private $engineId;

    /**
     * @var integer
     * @ORM\Column(name="period_id", type="integer", nullable=true)
     */
    private $periodId;

    /**
     * @var integer
     * @ORM\Column(name="company_id", type="integer", nullable=true)
     */
    private $companyId;

    /**
     * @var float
     *
     * @ORM\Column(name="fee", type="float", precision=10, scale=0, nullable=true)
     */
    private $fee;

    /**
     * @var float
     *
     * @ORM\Column(name="mobile_fee", type="float", precision=10, scale=0, nullable=true)
     */
    private $mobileFee;

    /**
     * @return float
     */
    public function getExpend()
    {
        return $this->expend;
    }

    /**
     * @param float $expend
     */
    public function setExpend($expend)
    {
        $this->expend = $expend;
    }

    /**
     * @return float
     */
    public function getConverted()
    {
        return $this->converted;
    }

    /**
     * @param float $converted
     */
    public function setConverted($converted)
    {
        $this->converted = $converted;
    }

    /**
     * @return int
     */
    public function getFuelId()
    {
        return $this->fuelId;
    }

    /**
     * @param int $fuelId
     */
    public function setFuelId($fuelId)
    {
        $this->fuelId = $fuelId;
    }

    /**
     * @return int
     */
    public function getMobileId()
    {
        return $this->mobileId;
    }

    /**
     * @param int $mobileId
     */
    public function setMobileId($mobileId)
    {
        $this->mobileId = $mobileId;
    }

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return int
     */
    public function getEngineId()
    {
        return $this->engineId;
    }

    /**
     * @param int $engineId
     */
    public function setEngineId($engineId)
    {
        $this->engineId = $engineId;
    }

    /**
     * @return int
     */
    public function getPeriodId()
    {
        return $this->periodId;
    }

    /**
     * @param int $periodId
     */
    public function setPeriodId($periodId)
    {
        $this->periodId = $periodId;
    }

    /**
     * @return int
     */
    public function getCompanyId()
    {
        return $this->companyId;
    }

    /**
     * @param int $companyId
     */
    public function setCompanyId($companyId)
    {
        $this->companyId = $companyId;
    }

    /**
     * @return float
     */
    public function getFee()
    {
        return $this->fee;
    }

    /**
     * @param float $fee
     */
    public function setFee($fee)
    {
        $this->fee = $fee;
    }

    /**
     * @return float
     */
    public function getMobileFee()
    {
        return $this->mobileFee;
    }

    /**
     * @param float $mobileFee
     */
    public function setMobileFee($mobileFee)
    {
        $this->mobileFee = $mobileFee;
    }

}

